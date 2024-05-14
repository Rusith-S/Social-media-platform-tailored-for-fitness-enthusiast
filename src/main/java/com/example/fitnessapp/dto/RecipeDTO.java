package com.example.fitnessapp.dto;
import java.util.List;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RecipeDTO {
    private Long id;
    private String title;
    private List<String> ingredients;
    private List<String> steps;
    private List<String> imageUrls;
}

