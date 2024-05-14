package com.example.fitnessapp.controller;

import com.example.fitnessapp.dto.CurrentWorkoutStatusDto;
import com.example.fitnessapp.service.CurrentWorkoutStatusService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/currentWorkoutStatus")
public class CurrentWorkoutStatusController {

    private CurrentWorkoutStatusService currentWorkoutStatusService;

    //Build Add CurrentWorkoutStatus REST API
    @PostMapping
    public ResponseEntity<CurrentWorkoutStatusDto> createCurrentWorkoutStatus(@RequestBody CurrentWorkoutStatusDto currentWorkoutStatusDto) {
        CurrentWorkoutStatusDto savedCurrentWorkoutStatus = currentWorkoutStatusService.createCurrentWorkoutStatus(currentWorkoutStatusDto);
        return new ResponseEntity<>(savedCurrentWorkoutStatus, HttpStatus.CREATED);
    }

    //Build get CurrentWorkoutStatus REST API
    @GetMapping("{id}")
    public ResponseEntity<CurrentWorkoutStatusDto> getCurrentWorkoutStatusById(@PathVariable("id") Long currentWorkoutStatusId) {
        CurrentWorkoutStatusDto currentWorkoutStatusDto = currentWorkoutStatusService.getCurrentWorkoutStatusById(currentWorkoutStatusId);
        return ResponseEntity.ok(currentWorkoutStatusDto);
    }

    //Build Get All REST API
    @GetMapping
    public ResponseEntity<List<CurrentWorkoutStatusDto>> getAllCurrentWorkoutStatuses() {
        List<CurrentWorkoutStatusDto> currentWorkoutStatuses = currentWorkoutStatusService.getAllCurrentWorkoutStatuses();
        return ResponseEntity.ok(currentWorkoutStatuses);
    }

    //Build Update Rest API
    @PutMapping("{id}")
    public ResponseEntity<CurrentWorkoutStatusDto> updateCurrentWorkoutStatus(@PathVariable("id") Long currentWorkoutStatusId,
                                                                              @RequestBody CurrentWorkoutStatusDto updatedCurrentWorkoutStatus) {
        CurrentWorkoutStatusDto currentWorkoutStatusDto = currentWorkoutStatusService.updateCurrentWorkoutStatus(currentWorkoutStatusId, updatedCurrentWorkoutStatus);
        return ResponseEntity.ok(currentWorkoutStatusDto);
    }

    //Build Delete Rest API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCurrentWorkoutStatus(@PathVariable("id") Long currentWorkoutStatusId) {
        currentWorkoutStatusService.deleteCurrentWorkoutStatus(currentWorkoutStatusId);
        return ResponseEntity.ok("Successfully deleted");
    }
}
