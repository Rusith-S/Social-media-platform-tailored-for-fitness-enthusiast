package com.example.fitnessapp.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WorkoutPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @ElementCollection
    private List<String> routines;

    // Use @OneToMany annotation to create a relationship with the Exercise entity
    @OneToMany( cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "workout_plan_id") // This specifies the foreign key column name in the Exercise table
    private List<Exercise> exercises;

    // Other fields and methods can remain the same
}
