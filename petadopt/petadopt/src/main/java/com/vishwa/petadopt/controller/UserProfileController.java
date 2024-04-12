package com.vishwa.petadopt.controller;

import com.vishwa.petadopt.model.UserProfile;
import com.vishwa.petadopt.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/userprofile")
public class UserProfileController {

    @Autowired
    private UserProfileRepository userProfileRepository;

    @GetMapping("/all")
    public List<UserProfile> getAllUserProfiles() {
        return userProfileRepository.findAll();
    }

    @GetMapping("/{id}")
    public UserProfile getUserProfileById(@PathVariable Long id) {
        return userProfileRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new RuntimeException("UserProfile not found with id " + id));
    }

    @PostMapping("/create")
    public UserProfile createUserProfile(@RequestBody UserProfile userProfile) {
        return userProfileRepository.save(userProfile);
    }

    @PutMapping("/{id}")
    public UserProfile updateUserProfile(@PathVariable Long id, @RequestBody UserProfile userProfile) {
        UserProfile existingProfile = userProfileRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new RuntimeException("UserProfile not found with id " + id));

        existingProfile.setAge(userProfile.getAge());
        existingProfile.setGender(userProfile.getGender());
        existingProfile.setDob(userProfile.getDob());
        existingProfile.setPhoneNumber(userProfile.getPhoneNumber());

        return userProfileRepository.save(existingProfile);
    }

    @DeleteMapping("/{id}")
    public String deleteUserProfile(@PathVariable Long id) {
        userProfileRepository.deleteById(Math.toIntExact(id));
        return "UserProfile with id " + id + " has been deleted successfully.";
    }
}
