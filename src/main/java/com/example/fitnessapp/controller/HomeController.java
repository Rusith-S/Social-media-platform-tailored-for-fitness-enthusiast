package com.example.fitnessapp.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.fitnessapp.dto.HomeDTO;
import com.example.fitnessapp.service.HomeService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/home")
public class HomeController {
 private HomeService homeService;

 // Your existing controller method with handleImageUploads integrated
    @PostMapping
    public ResponseEntity<HomeDTO> createHome(
            @RequestParam("title") String title,
            @RequestParam("images") List<MultipartFile> images) {

                HomeDTO homeDTO = new HomeDTO();
                homeDTO.setTitle(title);

        // Handle image uploads and retrieve image URLs
        List<String> imageUrls = handleImageUploads(images);
        
        homeDTO.setImageUrls(imageUrls);
        HomeDTO savedHomeDTO = homeService.createHome(homeDTO);

        return new ResponseEntity<>(savedHomeDTO, HttpStatus.CREATED);
    }

     // Method to handle image uploads
     private List<String> handleImageUploads(List<MultipartFile> images) {
        List<String> imageUrls = new ArrayList<>();

        // Define the directory where images will be stored
        String uploadDir = "D:\\3YS2\\PAF_assignment\\paf-assignment-2024-jun_we_109_team\\frontend\\public";
        System.out.println("Upload directory path: " + uploadDir);

        // Ensure the directory exists, create if it doesn't
        File directory = new File(uploadDir);
        if (!directory.exists()) {
            directory.mkdirs();
        }

        // Iterate over the list of image files
        for (MultipartFile image : images) {
            try {
                // Generate a unique filename for each image
                String fileName = UUID.randomUUID().toString() + "_" + image.getOriginalFilename();
                
                // Save the image to the server
                String filePath = uploadDir + File.separator + fileName;
                File dest = new File(filePath);
                image.transferTo(dest);

                // Generate the URL for the saved image
                String imageUrl =  fileName; // Replace with your actual domain and image URL pattern

                // Add the image URL to the list
                imageUrls.add(imageUrl);
            } catch (IOException e) { 
                // Handle exceptions (e.g., file I/O errors)
                e.printStackTrace();
            }
        }

        return imageUrls;
    }

      @GetMapping("/{id}")
    public ResponseEntity<HomeDTO> getHomeById(@PathVariable("id") Long id) {
        HomeDTO savedHomeDTO = homeService.getHomeById(id);
        return ResponseEntity.ok(savedHomeDTO);
    }

    @GetMapping
    public ResponseEntity<List<HomeDTO>> getHome() {
        List<HomeDTO> allhomeDTOs = homeService.getAllHome();
        return ResponseEntity.ok(allhomeDTOs);
    }

     @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteHome(@PathVariable Long id) {
        homeService.deleteHome(id);
        return ResponseEntity.ok("Home Deleted successfully");
    }

}
