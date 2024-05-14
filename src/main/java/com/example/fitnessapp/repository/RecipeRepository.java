package com.example.fitnessapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.fitnessapp.entity.Recipe;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe,Long>{

}
