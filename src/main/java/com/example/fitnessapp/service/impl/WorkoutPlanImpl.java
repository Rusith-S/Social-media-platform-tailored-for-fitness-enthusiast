package com.example.fitnessapp.service.impl;

import com.example.fitnessapp.dto.WorkoutPlanDTO;
import com.example.fitnessapp.entity.Exercise;
import com.example.fitnessapp.entity.WorkoutPlan;
import com.example.fitnessapp.exception.ResourceNotFoundException;
import com.example.fitnessapp.mapper.WorkoutPlanMapper;
import com.example.fitnessapp.repository.WorkoutPlanRepository;
import com.example.fitnessapp.service.WorkoutPlanServices;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class WorkoutPlanImpl implements WorkoutPlanServices {

    private final WorkoutPlanRepository workoutPlanRepository;
    

    @Override
    public WorkoutPlanDTO createWorkoutPlan(WorkoutPlanDTO workoutPlanDTO) {
        WorkoutPlan workoutPlan = WorkoutPlanMapper.mapToWorkoutPlan(workoutPlanDTO);
        WorkoutPlan savedWorkoutPlan = workoutPlanRepository.save(workoutPlan);
        return WorkoutPlanMapper.mapToWorkoutPlanDto(savedWorkoutPlan);
    }

    @Override
    public WorkoutPlanDTO getWorkoutPlanById(Long id) {
        WorkoutPlan workoutPlan = workoutPlanRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("WorkoutPlan not found with id: " + id));
        return WorkoutPlanMapper.mapToWorkoutPlanDto(workoutPlan);
    }

    @Override
    public List<WorkoutPlanDTO> getAllWorkoutPlans() {
        List<WorkoutPlan> workoutPlans = workoutPlanRepository.findAll();
        return workoutPlans.stream()
                .map(WorkoutPlanMapper::mapToWorkoutPlanDto)
                .collect(Collectors.toList());
    }

    @Transactional
    @Override
    public WorkoutPlanDTO updateWorkoutPlan(Long id, WorkoutPlanDTO updatedWorkoutPlanDTO) {
        WorkoutPlan existingWorkoutPlan = workoutPlanRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("WorkoutPlan not found with id: " + id));

        // Replace the entire exercises collection
        existingWorkoutPlan.getExercises().clear();
        existingWorkoutPlan.getExercises().addAll(
            WorkoutPlanMapper.mapToWorkoutPlan(updatedWorkoutPlanDTO).getExercises()
        );

        // Update the title and routines
        existingWorkoutPlan.setTitle(updatedWorkoutPlanDTO.getTitle());
        existingWorkoutPlan.setRoutines(updatedWorkoutPlanDTO.getRoutines());

        // Save the updated workout plan
        WorkoutPlan updatedWorkoutPlan = workoutPlanRepository.save(existingWorkoutPlan);
        
        return WorkoutPlanMapper.mapToWorkoutPlanDto(updatedWorkoutPlan);
    }


    @Override
    public void deleteWorkoutPlan(Long id) {
        WorkoutPlan existingWorkoutPlan = workoutPlanRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("WorkoutPlan not found with id: " + id));
        workoutPlanRepository.delete(existingWorkoutPlan);
    }
}
