package com.example.fitnessapp.service;

import com.example.fitnessapp.dto.MealplansDto;

import java.util.List;

public interface MealplansService {


    MealplansDto addMealplan(MealplansDto mealplan);
    MealplansDto getMealplansbyId(Long mealplanId);
    List<MealplansDto> getAllMealplans();
    MealplansDto updateMealplan(Long mealplanId, MealplansDto updatedMealplan);
    void deleteMealplan(Long mealplanId);
}
