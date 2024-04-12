package com.vishwa.petadopt.model;

import jakarta.persistence.*;

@Entity
public class UserProfile {
    @Id
    @GeneratedValue
    private Long id;

    private int age;
    private String gender;
    private String dob; // Date of Birth
    private String phoneNumber;


    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;


    public UserProfile() {

    }

    public UserProfile(Long id, int age, String gender, String dob, String phoneNumber) {
        this.id = id;
        this.age = age;
        this.gender = gender;
        this.dob = dob;
        this.phoneNumber = phoneNumber;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
