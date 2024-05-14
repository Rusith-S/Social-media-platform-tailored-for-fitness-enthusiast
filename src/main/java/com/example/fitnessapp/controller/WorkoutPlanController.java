package com.example.fitnessapp.controller;

import com.example.fitnessapp.dto.WorkoutPlanDTO;
import com.example.fitnessapp.service.WorkoutPlanServices;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/workoutplans")
public class WorkoutPlanController {
    private final WorkoutPlanServices workoutPlanServices;

    /**
     * Endpoint for creating a new workout plan.
     * @param workoutPlanDTO the data transfer object containing workout plan details
     * @return the created workout plan DTO wrapped in a response entity
     */
    @PostMapping
    public ResponseEntity<WorkoutPlanDTO> createWorkoutPlan(@RequestBody WorkoutPlanDTO workoutPlanDTO) {
        WorkoutPlanDTO savedWorkoutPlanDTO = workoutPlanServices.createWorkoutPlan(workoutPlanDTO);
        return new ResponseEntity<>(savedWorkoutPlanDTO, HttpStatus.CREATED);
    }

    /**
     * Endpoint for retrieving a workout plan by ID.
     * @param id the ID of the workout plan to retrieve
     * @return the workout plan DTO wrapped in a response entity
     */
    @GetMapping("/{id}")
    public ResponseEntity<WorkoutPlanDTO> getWorkoutPlanById(@PathVariable Long id) {
        WorkoutPlanDTO workoutPlanDTO = workoutPlanServices.getWorkoutPlanById(id);
        return ResponseEntity.ok(workoutPlanDTO);
    }

    /**
     * Endpoint for retrieving all workout plans.
     * @return a list of workout plan DTOs wrapped in a response entity
     */
    @GetMapping
    public ResponseEntity<List<WorkoutPlanDTO>> getAllWorkoutPlans() {
        List<WorkoutPlanDTO> workoutPlanDTOs = workoutPlanServices.getAllWorkoutPlans();
        return ResponseEntity.ok(workoutPlanDTOs);
    }

    /**
     * Endpoint for updating a workout plan by ID.
     * @param id the ID of the workout plan to update
     * @param updatedWorkoutPlanDTO the updated workout plan DTO
     * @return the updated workout plan DTO wrapped in a response entity
     */
    @PutMapping("/{id}")
    public ResponseEntity<WorkoutPlanDTO> updateWorkoutPlan(@PathVariable Long id, @RequestBody WorkoutPlanDTO updatedWorkoutPlanDTO) {
        WorkoutPlanDTO updatedWorkoutPlan = workoutPlanServices.updateWorkoutPlan(id, updatedWorkoutPlanDTO);
        return ResponseEntity.ok(updatedWorkoutPlan);
    }

    /**
     * Endpoint for deleting a workout plan by ID.
     * @param id the ID of the workout plan to delete
     * @return a success message wrapped in a response entity
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteWorkoutPlan(@PathVariable Long id) {
        workoutPlanServices.deleteWorkoutPlan(id);
        return ResponseEntity.ok("Workout plan deleted successfully");
    }
}
