package com.example.fitnessapp.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.fitnessapp.dto.HomeDTO;
import com.example.fitnessapp.entity.Home;
import com.example.fitnessapp.entity.Image2;
import com.example.fitnessapp.exception.ResourceNotFoundException;
import com.example.fitnessapp.mapper.HomeMapper;
import com.example.fitnessapp.repository.HomeRepository;
import com.example.fitnessapp.repository.ImageRepository2;
import com.example.fitnessapp.service.HomeService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class HomeImpl implements HomeService {
     private HomeRepository homeRepository;
    private ImageRepository2 imageRepository;

    
       @Override
    public HomeDTO createHome(HomeDTO homeDTO) {
        Home home = mapHomeDTOToEntity(homeDTO);
        home = homeRepository.save(home);
        List<Image2> images = saveImagesFromLocalFolder(homeDTO.getImageUrls(), home);
        home.setImages(images);
        home = homeRepository.save(home);
        return mapEntityToHomeDTO(home);
    }

    private Home mapHomeDTOToEntity(HomeDTO homeDTO) {
        Home home = new Home();
        home.setTitle(homeDTO.getTitle());
        return home;
    }

        private HomeDTO mapEntityToHomeDTO(Home home) {
            HomeDTO homeDTO = new HomeDTO();
            homeDTO.setId(home.getId());
        homeDTO.setTitle(home.getTitle());
        List<String> imageUrls = home.getImages().stream()
                                                .map(Image2::getImageUrl)
                                                .collect(Collectors.toList());
                                                homeDTO.setImageUrls(imageUrls);
        return homeDTO;
    }

     private List<Image2> saveImagesFromLocalFolder(List<String> imageUrls, Home home) {
        return imageUrls.stream()
                        .map(imageUrl -> {
                            Image2 image = new Image2();
                            image.setImageUrl(imageUrl);
                            image.setHome(home);
                            return imageRepository.save(image);
                        })
                        .collect(Collectors.toList());
    }

    @Override
    public HomeDTO getHomeById(Long id) {
        Home home = homeRepository.findById(id)
            .orElseThrow(() ->new ResourceNotFoundException("home not found with id: " + id));
        return HomeMapper.mapToHomeDto(home);
    }

    @Override
    public List<HomeDTO> getAllHome() {
        List<Home> home = homeRepository.findAll();
        return home.stream()
                .map(HomeMapper::mapToHomeDto) // Corrected lambda syntax
                .collect(Collectors.toList());
    }

    @Override
    public void deleteHome(Long id) {
        
        Home existing = homeRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("home not found with id: " + id));
        homeRepository.delete(existing);
    }

}
