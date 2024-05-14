package com.example.fitnessapp.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ExerciseDTO {
    private Long id; // Optional, depending on whether you want to include the ID in the DTO
    private String name; // Exercise name
    private Integer sets; // Number of sets
    private Integer repetitions; // Number of repetitions per set
}
