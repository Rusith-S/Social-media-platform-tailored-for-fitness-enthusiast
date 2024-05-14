package com.example.fitnessapp.service;

import java.util.List;

import com.example.fitnessapp.dto.HomeDTO;

public interface HomeService {
    HomeDTO createHome(HomeDTO homeDTO);

    HomeDTO getHomeById(Long id);

    List<HomeDTO> getAllHome();

    // HomeDTO updateHome(Long id, HomeDTO updatedHomeDTO);

    void deleteHome(Long id);

}
