package com.example.fitnessapp.repository;
import  com.example.fitnessapp.entity.Mealplans;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MealplansRepository extends JpaRepository<Mealplans, Long> {
}
