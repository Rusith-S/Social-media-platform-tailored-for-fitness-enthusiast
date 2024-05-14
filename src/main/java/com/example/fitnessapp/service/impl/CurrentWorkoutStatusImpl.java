package com.example.fitnessapp.service.impl;

import com.example.fitnessapp.dto.CurrentWorkoutStatusDto;
import com.example.fitnessapp.entity.Currentworkoutstatus;
import com.example.fitnessapp.exception.CurrentWorkoutStatusNotFoundException;
import com.example.fitnessapp.mapper.CurrentWorkoutStatusMapper;
import com.example.fitnessapp.repository.CurrentWorkoutStatusRepository;
import com.example.fitnessapp.service.CurrentWorkoutStatusService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CurrentWorkoutStatusImpl implements CurrentWorkoutStatusService {

    private CurrentWorkoutStatusRepository currentWorkoutStatusRepository;

    @Override
    public CurrentWorkoutStatusDto createCurrentWorkoutStatus(CurrentWorkoutStatusDto currentWorkoutStatusDto) {

        Currentworkoutstatus currentworkoutstatus = CurrentWorkoutStatusMapper.mapToCurrentworkoutStatus(currentWorkoutStatusDto);
        Currentworkoutstatus savedCurrentWorkoutStatus = currentWorkoutStatusRepository.save(currentworkoutstatus);
        return CurrentWorkoutStatusMapper.mapToCurrentWorkoutStatusDto(savedCurrentWorkoutStatus);
    }

    @Override
    public CurrentWorkoutStatusDto getCurrentWorkoutStatusById(Long currentWorkoutStatusId) {
        Currentworkoutstatus currentworkoutstatus = currentWorkoutStatusRepository.findById(currentWorkoutStatusId)
                .orElseThrow(() ->
                        new CurrentWorkoutStatusNotFoundException("Current Workout Status Not Found : " +currentWorkoutStatusId));

        return CurrentWorkoutStatusMapper.mapToCurrentWorkoutStatusDto(currentworkoutstatus);
    }

    @Override
    public List<CurrentWorkoutStatusDto> getAllCurrentWorkoutStatuses() {
        List<Currentworkoutstatus> currentworkoutstatuses = currentWorkoutStatusRepository.findAll();
        return currentworkoutstatuses.stream().map((currentworkoutstatus) -> CurrentWorkoutStatusMapper.mapToCurrentWorkoutStatusDto(currentworkoutstatus))
                .collect(Collectors.toList());
    }

    @Override
    public CurrentWorkoutStatusDto updateCurrentWorkoutStatus(Long currentWorkoutStatusId, CurrentWorkoutStatusDto updatedcurrentWorkoutStatus) {
        Currentworkoutstatus currentworkoutstatus = currentWorkoutStatusRepository.findById(currentWorkoutStatusId).orElseThrow(
                ()-> new CurrentWorkoutStatusNotFoundException("Current Workout Status Not Found : " +currentWorkoutStatusId)
        );

        currentworkoutstatus.setDate(updatedcurrentWorkoutStatus.getDate());
        currentworkoutstatus.setDistance_Ran(updatedcurrentWorkoutStatus.getDistance_Ran());
        currentworkoutstatus.setNo_of_Push_ups(updatedcurrentWorkoutStatus.getNo_of_Push_ups());
        currentworkoutstatus.setNo_of_Lunges(updatedcurrentWorkoutStatus.getNo_of_Lunges());
        currentworkoutstatus.setNo_of_Squats(updatedcurrentWorkoutStatus.getNo_of_Squats());
        currentworkoutstatus.setNo_of_Planks(updatedcurrentWorkoutStatus.getNo_of_Planks());
        currentworkoutstatus.setWeight_Lifted(updatedcurrentWorkoutStatus.getWeight_Lifted());
        currentworkoutstatus.setDescription(updatedcurrentWorkoutStatus.getDescription());

        Currentworkoutstatus updatedCurrentWorkoutStatusObj = currentWorkoutStatusRepository.save(currentworkoutstatus);

        return CurrentWorkoutStatusMapper.mapToCurrentWorkoutStatusDto(updatedCurrentWorkoutStatusObj);
    }

    @Override
    public void deleteCurrentWorkoutStatus(Long currentWorkoutStatusId) {
        Currentworkoutstatus currentworkoutstatus = currentWorkoutStatusRepository.findById(currentWorkoutStatusId).orElseThrow(
                ()-> new CurrentWorkoutStatusNotFoundException("Current Workout Status Not Found : " +currentWorkoutStatusId)
        );
        currentWorkoutStatusRepository.deleteById(currentWorkoutStatusId);
    }
}
