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
public class Home {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "home_id")
    private List<Image2> images;

    public List<Image2> getImages() {
        return this.images != null ? this.images : Collections.emptyList();
    }

   

}
