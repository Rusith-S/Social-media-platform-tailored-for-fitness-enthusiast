package com.example.fitnessapp.service;

import com.example.fitnessapp.dto.WorkoutPlanDTO;
import org.hibernate.jdbc.Work;

import java.util.List;

public interface WorkoutPlanServices {
    WorkoutPlanDTO createWorkoutPlan(WorkoutPlanDTO workoutPlanDTO);

    WorkoutPlanDTO getWorkoutPlanById(Long id);

    List<WorkoutPlanDTO> getAllWorkoutPlans();

    WorkoutPlanDTO updateWorkoutPlan(Long id, WorkoutPlanDTO updatedworkoutPlanDTO);

    void deleteWorkoutPlan(Long id);
}
