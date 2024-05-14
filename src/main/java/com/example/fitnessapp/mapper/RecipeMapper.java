package com.example.fitnessapp.mapper;

import com.example.fitnessapp.dto.RecipeDTO;
import com.example.fitnessapp.entity.Recipe;
import com.example.fitnessapp.entity.Image;

import java.util.stream.Collectors;

public class RecipeMapper {
    public static RecipeDTO mapToRecipeDto(Recipe recipe) {
        if (recipe == null) {
            return null;
        }
        
        return new RecipeDTO(
            recipe.getId(),
            recipe.getTitle(),
            recipe.getIngredients(),
            recipe.getSteps(),
            recipe.getImages() != null ? 
                recipe.getImages().stream().map(Image::getImageUrl).collect(Collectors.toList()) : 
                null
        );
    }
    
    public static Recipe mapToRecipe(RecipeDTO dto) {
        if (dto == null) {
            return null;
        }
        
        // You need to handle conversion of image URLs to Image entities if needed
        return new Recipe(
            dto.getId(),
            dto.getTitle(),
            dto.getIngredients(),
            dto.getSteps(),
            null // Populate images separately based on image URLs
        );
    }
}
