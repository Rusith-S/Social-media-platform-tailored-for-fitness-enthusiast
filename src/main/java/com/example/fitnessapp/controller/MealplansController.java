package com.example.fitnessapp.controller;

import com.example.fitnessapp.dto.MealplansDto;
import com.example.fitnessapp.service.MealplansService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;


import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/mealplans")
public class MealplansController {

    private MealplansService mealplansService;

    //build add meal plan REST API
    @PostMapping
    public ResponseEntity<MealplansDto> addMealplan(@RequestBody MealplansDto mealplansDto) {
       MealplansDto savedMealplans= mealplansService.addMealplan(mealplansDto);
       return  new ResponseEntity<>(savedMealplans, HttpStatus.CREATED);
    }

    //build get meal plan by id REST API
    @GetMapping("{id}")
    public ResponseEntity<MealplansDto> getMealplansbyId(@PathVariable("id") Long mealplanId) {
       MealplansDto mealplanDto= mealplansService.getMealplansbyId(mealplanId);
        return ResponseEntity.ok(mealplanDto);
    }

    //build get all meal plan  REST API
    @GetMapping
    public  ResponseEntity<List<MealplansDto>> getAllMealplans(){
       List<MealplansDto> mealplans= mealplansService.getAllMealplans();
       return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(mealplans);
    }

    //build update meal plan  REST API
    @PutMapping("{id}")
    public ResponseEntity<MealplansDto> updateMealplans(@PathVariable("id") Long mealplanId,@RequestBody MealplansDto updatedMealplan){
       MealplansDto mealplanDto= mealplansService.updateMealplan(mealplanId,updatedMealplan);
       return ResponseEntity.ok(mealplanDto);
    }

    //build delete meal plan  REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteMealplan(@PathVariable("id") Long mealplanId){
        mealplansService.deleteMealplan(mealplanId);
        return ResponseEntity.ok("Deleted Mealplan");
    }
}
