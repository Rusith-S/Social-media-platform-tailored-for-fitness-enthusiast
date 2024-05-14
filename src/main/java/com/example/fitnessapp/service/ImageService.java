package com.example.fitnessapp.service;

import com.example.fitnessapp.entity.Image;

import java.util.List;

import org.springframework.stereotype.Service;
@Service
public interface ImageService {
public Image create(Image image);
    public List<Image> viewAll();
    public Image viewById(long id);
}
