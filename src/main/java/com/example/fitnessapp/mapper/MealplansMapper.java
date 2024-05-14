package com.example.fitnessapp.mapper;

import com.example.fitnessapp.dto.MealplansDto;
import com.example.fitnessapp.entity.Mealplans;

public class MealplansMapper {
    public static MealplansDto mapToMealplansDto(Mealplans mealplans) {
        return new MealplansDto(
                mealplans.getId(),
                mealplans.getDietaryPreferences(),
                mealplans.getBreakfasttime(),
                mealplans.getBreakfastmealName(),
                mealplans.getBreakfastportionSize(),
                mealplans.getBreakfastNutritionalInformation(),
                mealplans.getLunchtime(),
                mealplans.getLunchmealName(),
                mealplans.getLunchportionSize(),
                mealplans.getLunchNutritionalInformation(),
                mealplans.getSnacktime(),
                mealplans.getSnackmealName(),
                mealplans.getSnackportionSize(),
                mealplans.getSnackNutritionalInformation(),
                mealplans.getDinnertime(),
                mealplans.getDinnermealName(),
                mealplans.getDinnerportionSize(),
                mealplans.getDinnerNutritionalInformation()


        );
    }

    public static Mealplans mapToMealplans(MealplansDto mealplansDto) {
        return new Mealplans(
                mealplansDto.getId(),
                mealplansDto.getDietaryPreferences(),
                mealplansDto.getBreakfasttime(),
                mealplansDto.getBreakfastmealName(),
                mealplansDto.getBreakfastportionSize(),
                mealplansDto.getBreakfastNutritionalInformation(),
                mealplansDto.getLunchtime(),
                mealplansDto.getLunchmealName(),
                mealplansDto.getLunchportionSize(),
                mealplansDto.getLunchNutritionalInformation(),
                mealplansDto.getSnacktime(),
                mealplansDto.getSnackmealName(),
                mealplansDto.getSnackportionSize(),
                mealplansDto.getSnackNutritionalInformation(),
                mealplansDto.getDinnertime(),
                mealplansDto.getDinnermealName(),
                mealplansDto.getDinnerportionSize(),
                mealplansDto.getDinnerNutritionalInformation()
        );
    }
}
