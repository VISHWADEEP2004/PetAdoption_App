package com.vishwa.petadopt.model;

import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Entity
public class User {

   @Id
    @GeneratedValue
    private Long id;

    private String username;
    private String email;
    private String password;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private UserProfile userProfile;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Pet> pets;

    public User() {
    }

    public User(Long id, String username, String email, String password
    ) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Getters and setters for all fields

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
        userProfile.setUser(this); // Set the user in the UserProfile entity
    }



    public UserProfile getUserProfile() {
        return userProfile;
    }

}
