package com.example.fitnessapp.service.impl;

import com.example.fitnessapp.dto.MealplansDto;
import com.example.fitnessapp.entity.Mealplans;
import com.example.fitnessapp.exception.MealplanNotFoundException;
import com.example.fitnessapp.mapper.MealplansMapper;
import com.example.fitnessapp.repository.MealplansRepository;
import com.example.fitnessapp.service.MealplansService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MealplansImpl implements MealplansService{

    private MealplansRepository mealplansRepository;
    @Override
    public MealplansDto addMealplan(MealplansDto mealplansDto) {
        Mealplans  mealplans = MealplansMapper.mapToMealplans(mealplansDto);
        Mealplans savedMealplans= mealplansRepository.save(mealplans);

        return MealplansMapper.mapToMealplansDto(savedMealplans);
    }

    @Override
    public MealplansDto getMealplansbyId(Long mealplanId) {
       Mealplans mealplans= mealplansRepository.findById(mealplanId)
                .orElseThrow(() -> new MealplanNotFoundException("Meal plan not exist by given id :"+ mealplanId));
        return MealplansMapper.mapToMealplansDto(mealplans);
    }

    @Override
    public List<MealplansDto> getAllMealplans() {
        List<Mealplans> mealplans= mealplansRepository.findAll();
        return mealplans.stream().map((mealplan) -> MealplansMapper.mapToMealplansDto(mealplan))
                .collect(Collectors.toList());
    }

    @Override
    public MealplansDto updateMealplan(Long mealplanId, MealplansDto updatedMealplan) {
       Mealplans mealplan= mealplansRepository.findById(mealplanId).orElseThrow(
                ()-> new MealplanNotFoundException("Meal plan not exist by given id :"+ mealplanId)
        );

       mealplan.setDietaryPreferences(updatedMealplan.getDietaryPreferences());
       mealplan.setBreakfasttime(updatedMealplan.getBreakfasttime());
       mealplan.setLunchtime(updatedMealplan.getLunchtime());
       mealplan.setDinnertime(updatedMealplan.getDinnertime());
       mealplan.setSnacktime(updatedMealplan.getSnacktime());
       mealplan.setBreakfastmealName(updatedMealplan.getBreakfastmealName());
       mealplan.setLunchmealName(updatedMealplan.getLunchmealName());
       mealplan.setDinnermealName(updatedMealplan.getDinnermealName());
       mealplan.setSnackmealName(updatedMealplan.getSnackmealName());
       mealplan.setBreakfastNutritionalInformation(updatedMealplan.getBreakfastNutritionalInformation());
       mealplan.setDinnerNutritionalInformation(updatedMealplan.getDinnerNutritionalInformation());
       mealplan.setLunchNutritionalInformation(updatedMealplan.getLunchNutritionalInformation());
       mealplan.setSnackNutritionalInformation(updatedMealplan.getSnackNutritionalInformation());
       mealplan.setBreakfastportionSize(updatedMealplan.getBreakfastportionSize());
       mealplan.setLunchportionSize(updatedMealplan.getLunchportionSize());
       mealplan.setDinnerportionSize(updatedMealplan.getDinnerportionSize());
       mealplan.setSnackportionSize(updatedMealplan.getSnackportionSize());

        Mealplans updatemealplans=mealplansRepository.save(mealplan);
        return MealplansMapper.mapToMealplansDto(updatemealplans);
    }

    @Override
    public void deleteMealplan(Long mealplanId) {
        Mealplans mealplan= mealplansRepository.findById(mealplanId).orElseThrow(
                ()-> new MealplanNotFoundException("Meal plan not exist by given id :"+ mealplanId)
        );

        mealplansRepository.deleteById(mealplanId);
    }
}
