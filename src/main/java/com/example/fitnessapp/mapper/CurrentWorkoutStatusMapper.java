package com.example.fitnessapp.mapper;

import com.example.fitnessapp.dto.CurrentWorkoutStatusDto;
import com.example.fitnessapp.entity.Currentworkoutstatus;

public class CurrentWorkoutStatusMapper {

    public static CurrentWorkoutStatusDto mapToCurrentWorkoutStatusDto(Currentworkoutstatus currentworkoutstatus) {
        return new CurrentWorkoutStatusDto(
                currentworkoutstatus.getId(),
                currentworkoutstatus.getDate(),
                currentworkoutstatus.getDistance_Ran(),
                currentworkoutstatus.getNo_of_Push_ups(),
                currentworkoutstatus.getNo_of_Lunges(),
                currentworkoutstatus.getNo_of_Squats(),
                currentworkoutstatus.getNo_of_Planks(),
                currentworkoutstatus.getWeight_Lifted(),
                currentworkoutstatus.getDescription()
        );
    }

    public static Currentworkoutstatus mapToCurrentworkoutStatus(CurrentWorkoutStatusDto  currentWorkoutStatusDto) {
        return new Currentworkoutstatus(
                currentWorkoutStatusDto.getId(),
                currentWorkoutStatusDto.getDate(),
                currentWorkoutStatusDto.getDistance_Ran(),
                currentWorkoutStatusDto.getNo_of_Push_ups(),
                currentWorkoutStatusDto.getNo_of_Lunges(),
                currentWorkoutStatusDto.getNo_of_Squats(),
                currentWorkoutStatusDto.getNo_of_Planks(),
                currentWorkoutStatusDto.getWeight_Lifted(),
                currentWorkoutStatusDto.getDescription()
        );
    }
}
