package com.example.fitnessapp.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WorkoutPlanDTO {
    private Long id;
    private String title;
    private List<String> routines;
    private List<ExerciseDTO> exercises; // Update to a list of ExerciseDTO
}
