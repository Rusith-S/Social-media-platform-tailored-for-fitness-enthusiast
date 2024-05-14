package com.example.fitnessapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class CurrentWorkoutStatusDto {
    private Long id;
    private String date;
    private float distance_Ran;
    private int no_of_Push_ups;
    private int no_of_Lunges;
    private int no_of_Squats;
    private int no_of_Planks;
    private float weight_Lifted;
    private String description;
}
