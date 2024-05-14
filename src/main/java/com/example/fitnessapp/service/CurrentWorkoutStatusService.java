package com.example.fitnessapp.service;

import com.example.fitnessapp.dto.CurrentWorkoutStatusDto;

import java.util.List;

public interface CurrentWorkoutStatusService {
    CurrentWorkoutStatusDto createCurrentWorkoutStatus(CurrentWorkoutStatusDto currentWorkoutStatusDto);

    CurrentWorkoutStatusDto getCurrentWorkoutStatusById(Long currentWorkoutStatusId);

    List<CurrentWorkoutStatusDto> getAllCurrentWorkoutStatuses();

    CurrentWorkoutStatusDto updateCurrentWorkoutStatus(Long currentWorkoutStatusId, CurrentWorkoutStatusDto updatedcurrentWorkoutStatus);

    void deleteCurrentWorkoutStatus(Long currentWorkoutStatusId);
}
