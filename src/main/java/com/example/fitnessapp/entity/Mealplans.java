package com.example.fitnessapp.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name= "mealplans")

public class Mealplans {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "dietary_Preferences")
    private String dietaryPreferences;

    @Column(name = "breakfast_time")
    private String breakfasttime;
    @Column(name = "breakfast_mealName")
    private String breakfastmealName;
    @Column(name = "breakfast_portionSize")
    private String breakfastportionSize;
    @Column(name = "breakfast_NutritionalInformation")
    private String breakfastNutritionalInformation ;

    @Column(name = "lunch_time")
    private String lunchtime;
    @Column(name = "lunch_mealName")
    private String lunchmealName;
    @Column(name = "lunch_portionSize")
    private String lunchportionSize;
    @Column(name = "lunch_NutritionalInformation")
    private String lunchNutritionalInformation ;

    @Column(name = "snack_time")
    private String snacktime;
    @Column(name = "snack_mealName")
    private String snackmealName;
    @Column(name = "snack_portionSize")
    private String snackportionSize;
    @Column(name = "snack_NutritionalInformation")
    private String snackNutritionalInformation ;

    @Column(name = "dinner_time")
    private String dinnertime;
    @Column(name = "dinner_mealName")
    private String dinnermealName;
    @Column(name = "dinner_portionSize")
    private String dinnerportionSize;
    @Column(name = "dinner_NutritionalInformation")
    private String dinnerNutritionalInformation ;

    

}
