package com.example.fitnessapp.mapper;

import com.example.fitnessapp.dto.ExerciseDTO;
import com.example.fitnessapp.dto.WorkoutPlanDTO;
import com.example.fitnessapp.entity.Exercise;
import com.example.fitnessapp.entity.WorkoutPlan;

import java.util.List;
import java.util.stream.Collectors;

public class WorkoutPlanMapper {

    // Map Exercise entity to ExerciseDTO
    private static ExerciseDTO mapToExerciseDto(Exercise exercise) {
        ExerciseDTO exerciseDTO = new ExerciseDTO();
        exerciseDTO.setId(exercise.getId());
        exerciseDTO.setName(exercise.getName());
        exerciseDTO.setSets(exercise.getSets());
        exerciseDTO.setRepetitions(exercise.getRepetitions());
        return exerciseDTO;
    }

    // Map ExerciseDTO to Exercise entity
    private static Exercise mapToExercise(ExerciseDTO exerciseDTO) {
        Exercise exercise = new Exercise();
        exercise.setId(exerciseDTO.getId());
        exercise.setName(exerciseDTO.getName());
        exercise.setSets(exerciseDTO.getSets());
        exercise.setRepetitions(exerciseDTO.getRepetitions());
        return exercise;
    }

    // Map WorkoutPlan entity to WorkoutPlanDTO
    public static WorkoutPlanDTO mapToWorkoutPlanDto(WorkoutPlan workoutPlan) {
        WorkoutPlanDTO dto = new WorkoutPlanDTO();
        dto.setId(workoutPlan.getId());
        dto.setTitle(workoutPlan.getTitle());
        dto.setRoutines(workoutPlan.getRoutines());
        dto.setExercises(workoutPlan.getExercises().stream()
        .map(WorkoutPlanMapper::mapToExerciseDto)
        .collect(Collectors.toList()));
    return dto;
    }

    // Map WorkoutPlanDTO to WorkoutPlan entity
    public static WorkoutPlan mapToWorkoutPlan(WorkoutPlanDTO dto) {
        WorkoutPlan workoutPlan = new WorkoutPlan();
        workoutPlan.setId(dto.getId());
        workoutPlan.setTitle(dto.getTitle());
        workoutPlan.setRoutines(dto.getRoutines());
        workoutPlan.setExercises(dto.getExercises().stream()
            .map(WorkoutPlanMapper::mapToExercise)
            .collect(Collectors.toList()));
        return workoutPlan;
    }
}
