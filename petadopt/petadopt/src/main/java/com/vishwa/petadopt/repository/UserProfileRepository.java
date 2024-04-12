package com.vishwa.petadopt.repository;

import com.vishwa.petadopt.model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserProfileRepository extends JpaRepository<UserProfile,Integer> {
}
