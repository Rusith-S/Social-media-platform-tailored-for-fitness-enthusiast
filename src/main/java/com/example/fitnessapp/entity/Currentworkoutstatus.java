package com.example.fitnessapp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "currentworkoutstatus")


public class Currentworkoutstatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private String date;

    @Column(name = "distance_Ran")
    private float distance_Ran;

    @Column(name = "no_of_Push_ups")
    private int no_of_Push_ups;

    @Column(name = "no_of_Lunges")
    private int no_of_Lunges;

    @Column(name = "no_of_Squats")
    private int no_of_Squats;

    @Column(name = "no_of_Planks")
    private int no_of_Planks;

    @Column(name = "weight_Lifted")
    private float weight_Lifted;

    @Column(name = "description")
    private String description;

}
