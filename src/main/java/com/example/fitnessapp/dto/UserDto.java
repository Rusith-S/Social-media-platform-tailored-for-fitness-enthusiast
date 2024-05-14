package com.example.fitnessapp.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Long id;
    private String fullName;
    private String email;
    private String passWord;
    private String fitnessLevel;
    private String height;
    private String weight;
    private String medicalCondition;
    private String dietryPlan;


}
