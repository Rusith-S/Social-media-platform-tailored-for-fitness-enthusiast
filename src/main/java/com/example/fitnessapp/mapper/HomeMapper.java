package com.example.fitnessapp.mapper;

import java.util.stream.Collectors;

import com.example.fitnessapp.dto.HomeDTO;
import com.example.fitnessapp.entity.Home;
import com.example.fitnessapp.entity.Image2;

public class HomeMapper {
public static HomeDTO mapToHomeDto(Home home) {
        if (home == null) {
            return null;
        }
        
        return new HomeDTO(
            home.getId(),
            home.getTitle(),
            home.getImages() != null ? 
            home.getImages().stream().map(Image2::getImageUrl).collect(Collectors.toList()) : 
                null
        );
    }
    
    public static Home mapToHome(HomeDTO dto) {
        if (dto == null) {
            return null;
        }
        
        // You need to handle conversion of image URLs to Image entities if needed
        return new Home(
            dto.getId(),
            dto.getTitle(),
            null // Populate images separately based on image URLs
        );
    }
}
