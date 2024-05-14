package com.example.fitnessapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.fitnessapp.entity.Home;

public interface HomeRepository extends JpaRepository<Home,Long> {

}
