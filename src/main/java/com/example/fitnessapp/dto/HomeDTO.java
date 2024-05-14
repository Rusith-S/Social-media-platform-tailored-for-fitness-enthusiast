package com.example.fitnessapp.dto;

import java.util.List;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HomeDTO {
    private Long id;
    private String title;
    
    private List<String> imageUrls;
}
