// package com.example.fitnessapp.controller;

// import java.io.File;
// import java.io.IOException;
// import java.util.ArrayList;
// import java.util.List;
// import java.util.UUID;

// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.multipart.MultipartFile;

// import com.example.fitnessapp.dto.RecipeDTO;
// import com.example.fitnessapp.service.RecipeService;

// import lombok.AllArgsConstructor;

// @AllArgsConstructor
// @RestController

// @RequestMapping("/api/recipe")
// public class RecipeController {
//     private RecipeService recipeService;

//     // Your existing controller method with handleImageUploads integrated
//     @PostMapping
//     public ResponseEntity<RecipeDTO> createRecipe(
//             @RequestParam("title") String title,
//             @RequestParam("ingredients") List<String> ingredients,
//             @RequestParam("steps") List<String> steps,
//             @RequestParam("images") List<MultipartFile> images) {

//         RecipeDTO recipeDTO = new RecipeDTO();
//         recipeDTO.setTitle(title);
//         recipeDTO.setIngredients(ingredients);
//         recipeDTO.setSteps(steps);

//         // Handle image uploads and retrieve image URLs
//         List<String> imageUrls = handleImageUploads(images);
        
//         // Update RecipeDTO with image URLs
//         recipeDTO.setImageUrls(imageUrls);

//         // Pass the updated RecipeDTO to the service layer for further processing
//         RecipeDTO savedRecipeDTO = recipeService.createRecipe(recipeDTO);

//         return new ResponseEntity<>(savedRecipeDTO, HttpStatus.CREATED);
//     }

//      // Method to handle image uploads
//      private List<String> handleImageUploads(List<MultipartFile> images) {
//         List<String> imageUrls = new ArrayList<>();

//         // Define the directory where images will be stored
//         String uploadDir = "D:\\3YS2\\PAF_assignment\\paf-assignment-2024-jun_we_109_team\\frontend\\public";
//         System.out.println("Upload directory path: " + uploadDir);

//         // Ensure the directory exists, create if it doesn't
//         File directory = new File(uploadDir);
//         if (!directory.exists()) {
//             directory.mkdirs();
//         }

//         // Iterate over the list of image files
//         for (MultipartFile image : images) {
//             try {
//                 // Generate a unique filename for each image
//                 String fileName = UUID.randomUUID().toString() + "_" + image.getOriginalFilename();
                
//                 // Save the image to the server
//                 String filePath = uploadDir + File.separator + fileName;
//                 File dest = new File(filePath);
//                 image.transferTo(dest);

//                 // Generate the URL for the saved image
//                 String imageUrl =  fileName; // Replace with your actual domain and image URL pattern

//                 // Add the image URL to the list
//                 imageUrls.add(imageUrl);
//             } catch (IOException e) { 
//                 // Handle exceptions (e.g., file I/O errors)
//                 e.printStackTrace();
//             }
//         }

//         return imageUrls;
//     }
   
//       //Build getRecipe Rest API
//     @GetMapping("/{id}")
//     public ResponseEntity<RecipeDTO> getRecipeById(@PathVariable("id") Long id) {
//         RecipeDTO savedRecipeDTO = recipeService.getRecipeById(id);
//         return ResponseEntity.ok(savedRecipeDTO);
//     }

//     @GetMapping
//     public ResponseEntity<List<RecipeDTO>> getRecipe() {
//         List<RecipeDTO> allrecipeDTOs = recipeService.getAllRecipes();
//         return ResponseEntity.ok(allrecipeDTOs);
//     }

//     @PutMapping("/{id}")
//     public ResponseEntity<RecipeDTO> updateRecipe(@PathVariable Long id, @RequestBody RecipeDTO updatedrecipeDTO) {
//         RecipeDTO recipeDTO = recipeService.updateRecipe(id, updatedrecipeDTO);
//         return ResponseEntity.ok(recipeDTO);
//     }

//     @DeleteMapping("/{id}")
//     public ResponseEntity<String> deleteRecipe(@PathVariable Long id) {
//         recipeService.deleteRecipe(id);
//         return ResponseEntity.ok("Recipe Deleted successfully");
//     }
// }



package com.example.fitnessapp.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.fitnessapp.dto.RecipeDTO;
import com.example.fitnessapp.service.RecipeService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController

@RequestMapping("/api/recipe")
public class RecipeController {
    private RecipeService recipeService;

    // Your existing controller method with handleImageUploads integrated
    @PostMapping
    public ResponseEntity<RecipeDTO> createRecipe(
            @RequestParam("title") String title,
            @RequestParam("ingredients") List<String> ingredients,
            @RequestParam("steps") List<String> steps,
            @RequestParam("images") List<MultipartFile> images) {

        RecipeDTO recipeDTO = new RecipeDTO();
        recipeDTO.setTitle(title);
        recipeDTO.setIngredients(ingredients);
        recipeDTO.setSteps(steps);

        // Handle image uploads and retrieve image URLs
        List<String> imageUrls = handleImageUploads(images);
        
        // Update RecipeDTO with image URLs
        recipeDTO.setImageUrls(imageUrls);

        // Pass the updated RecipeDTO to the service layer for further processing
        RecipeDTO savedRecipeDTO = recipeService.createRecipe(recipeDTO);

        return new ResponseEntity<>(savedRecipeDTO, HttpStatus.CREATED);
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
   
      //Build getRecipe Rest API
    @GetMapping("/{id}")
    public ResponseEntity<RecipeDTO> getRecipeById(@PathVariable("id") Long id) {
        RecipeDTO savedRecipeDTO = recipeService.getRecipeById(id);
        return ResponseEntity.ok(savedRecipeDTO);
    }

    @GetMapping
    public ResponseEntity<List<RecipeDTO>> getRecipe() {
        List<RecipeDTO> allrecipeDTOs = recipeService.getAllRecipes();
        return ResponseEntity.ok(allrecipeDTOs);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RecipeDTO> updateRecipe(@PathVariable Long id, @RequestBody RecipeDTO updatedrecipeDTO) {
        RecipeDTO recipeDTO = recipeService.updateRecipe(id, updatedrecipeDTO);
        return ResponseEntity.ok(recipeDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRecipe(@PathVariable Long id) {
        recipeService.deleteRecipe(id);
        return ResponseEntity.ok("Recipe Deleted successfully");
    }
}