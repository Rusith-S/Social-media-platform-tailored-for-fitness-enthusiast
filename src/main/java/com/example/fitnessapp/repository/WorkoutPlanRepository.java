package com.example.fitnessapp.repository;



import com.example.fitnessapp.entity.WorkoutPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkoutPlanRepository extends JpaRepository<WorkoutPlan, Long> {
    // You can add custom query methods if needed
}
