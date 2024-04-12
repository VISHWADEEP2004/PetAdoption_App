package com.vishwa.petadopt.controller;
import com.vishwa.petadopt.exception.UserNotFoundException;
import com.vishwa.petadopt.model.User;
import com.vishwa.petadopt.model.UserProfile;
import com.vishwa.petadopt.repository.UserProfileRepository;
import com.vishwa.petadopt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserProfileRepository userProfileRepository;

    @PostMapping("/user")
    public List<User> newUser(@RequestBody List<User> newUser) {
        return userRepository.saveAll(newUser);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/users/paginated")
    public Page<User> getAllUsersPaginated(@RequestParam int page, @RequestParam int size) {
        return userRepository.findAll(PageRequest.of(page, size));
    }

    @GetMapping("/users/sorted")
    public List<User> getAllUsersSorted() {
        return userRepository.findAll(Sort.by(Sort.Direction.ASC, "username"));
    }

    @PutMapping("/user/{id}")
    public User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setEmail(newUser.getEmail());
                    user.setPassword(newUser.getPassword());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id " + id + " has been deleted successfully.";
    }

    @PostMapping("/saveuser")
    public String newUser(@RequestBody User user) {
        // Create a new user profile
        UserProfile userProfile = new UserProfile();
        userProfile.setAge(user.getUserProfile().getAge());
        userProfile.setGender(user.getUserProfile().getGender());
        userProfile.setDob(user.getUserProfile().getDob());
        userProfile.setPhoneNumber(user.getUserProfile().getPhoneNumber());

        // Save the user profile
        userProfileRepository.save(userProfile);

        // Set the user profile for the user
        user.setUserProfile(userProfile);

        // Save the user
        userRepository.save(user);

        return "User saved successfully";
    }
}
