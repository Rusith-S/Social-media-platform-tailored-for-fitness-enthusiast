package com.example.fitnessapp.repository;

import com.example.fitnessapp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
