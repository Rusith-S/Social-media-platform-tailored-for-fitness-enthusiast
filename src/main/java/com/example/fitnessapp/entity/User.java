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
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fullName" , nullable = false)
    private String fullName;
    @Column(name = "Email", nullable = false, unique = true)
    private String email;
    @Column(name = "Password" , nullable = false)
    private String passWord;
    @Column(name = "Fitness_Level" , nullable = false)
    private String fitnessLevel;
    @Column(name = "Height" , nullable = false)
    private String height;
    @Column(name = "Weight" , nullable = false)
    private String weight;
    @Column(name = "Medical_Condition" , nullable = false)
    private String medicalCondition;
    @Column(name = "Diete_Plan" , nullable = false)
    private String dietryPlan;
}
