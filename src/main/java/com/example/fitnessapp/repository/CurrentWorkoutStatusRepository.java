package com.example.fitnessapp.repository;

import com.example.fitnessapp.entity.Currentworkoutstatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrentWorkoutStatusRepository extends JpaRepository<Currentworkoutstatus, Long> {
}
