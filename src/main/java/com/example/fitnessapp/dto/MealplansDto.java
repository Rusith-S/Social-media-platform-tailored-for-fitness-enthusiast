package com.example.fitnessapp.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class MealplansDto {
    private Long id;
    private String dietaryPreferences;
    private String breakfasttime;
    private String breakfastmealName;
    private String breakfastportionSize;
    private String breakfastNutritionalInformation ;
    private String lunchtime;
    private String lunchmealName;
    private String lunchportionSize;
    private String lunchNutritionalInformation ;
    private String snacktime;
    private String snackmealName;
    private String snackportionSize;
    private String snackNutritionalInformation ;
    private String dinnertime;
    private String dinnermealName;
    private String dinnerportionSize;
    private String dinnerNutritionalInformation ;

}
