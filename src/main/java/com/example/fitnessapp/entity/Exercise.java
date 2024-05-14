package com.example.fitnessapp.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; // Exercise name
    private Integer sets; // Number of sets
    private Integer repetitions; // Number of repetitions per set
}
