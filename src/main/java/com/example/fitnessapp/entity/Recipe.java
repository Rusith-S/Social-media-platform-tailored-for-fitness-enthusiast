package com.example.fitnessapp.entity;

import lombok.*;
import jakarta.persistence.*;
import java.util.Collections;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @ElementCollection
    private List<String> ingredients;

    @ElementCollection
    private List<String> steps;

@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "recipe_id")
    private List<Image> images;

    public List<Image> getImages() {
        return this.images != null ? this.images : Collections.emptyList();
    }

}
