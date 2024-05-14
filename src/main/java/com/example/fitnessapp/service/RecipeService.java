package com.example.fitnessapp.service;

import java.util.List;
import com.example.fitnessapp.dto.RecipeDTO;

public interface RecipeService {
    RecipeDTO createRecipe(RecipeDTO recipeDTO);

    RecipeDTO getRecipeById(Long id);

    List<RecipeDTO> getAllRecipes();

    RecipeDTO updateRecipe(Long id, RecipeDTO updatedRecipeDTO);

    void deleteRecipe(Long id);
}
