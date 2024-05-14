// // package com.example.fitnessapp.service.impl;

// // import java.util.List;
// // import java.util.stream.Collectors;

// // import org.springframework.stereotype.Service;

// // import com.example.fitnessapp.dto.RecipeDTO;
// // import com.example.fitnessapp.entity.Image;
// // import com.example.fitnessapp.entity.Recipe;
// // import com.example.fitnessapp.exception.ResourceNotFoundException;
// // import com.example.fitnessapp.mapper.RecipeMapper;
// // import com.example.fitnessapp.repository.ImageRepository;
// // import com.example.fitnessapp.repository.RecipeRepository;
// // import com.example.fitnessapp.service.RecipeService;
// // import lombok.AllArgsConstructor;

// // @Service
// // @AllArgsConstructor
// // public class RecipeImpl implements RecipeService{

// //     private RecipeRepository recipeRepository;
// //     private ImageRepository imageRepository;

// //        @Override
// //     public RecipeDTO createRecipe(RecipeDTO recipeDTO) {
// //         Recipe recipe = mapRecipeDTOToEntity(recipeDTO);
// //         // Save recipe
// //         recipe = recipeRepository.save(recipe);
// //         // Save associated images from local folder
// //         List<Image> images = saveImagesFromLocalFolder(recipeDTO.getImageUrls(), recipe);
// //         recipe.setImages(images);
// //         // Update recipe with saved images
// //         recipe = recipeRepository.save(recipe);
// //         return mapEntityToRecipeDTO(recipe);
// //     }

// //     // Helper methods for mapping between RecipeDTO and Recipe entity

// //     private Recipe mapRecipeDTOToEntity(RecipeDTO recipeDTO) {
// //         Recipe recipe = new Recipe();
// //         recipe.setTitle(recipeDTO.getTitle());
// //         recipe.setIngredients(recipeDTO.getIngredients());
// //         recipe.setSteps(recipeDTO.getSteps());
// //         return recipe;
// //     }

// //     private RecipeDTO mapEntityToRecipeDTO(Recipe recipe) {
// //         RecipeDTO recipeDTO = new RecipeDTO();
// //         recipeDTO.setId(recipe.getId());
// //         recipeDTO.setTitle(recipe.getTitle());
// //         recipeDTO.setIngredients(recipe.getIngredients());
// //         recipeDTO.setSteps(recipe.getSteps());
// //         List<String> imageUrls = recipe.getImages().stream()
// //                                                 .map(Image::getImageUrl)
// //                                                 .collect(Collectors.toList());
// //         recipeDTO.setImageUrls(imageUrls);
// //         return recipeDTO;
// //     }

// //     // Helper method to save images associated with a recipe from local folder
// //     private List<Image> saveImagesFromLocalFolder(List<String> imageUrls, Recipe recipe) {
// //         return imageUrls.stream()
// //                         .map(imageUrl -> {
// //                             Image image = new Image();
// //                             image.setImageUrl(imageUrl);
// //                             image.setRecipe(recipe);
// //                             return imageRepository.save(image);
// //                         })
// //                         .collect(Collectors.toList());
// //     }

// //     @Override
// //     public RecipeDTO getRecipeById(Long id) {
// //         Recipe recipe = recipeRepository.findById(id)
// //             .orElseThrow(() ->new ResourceNotFoundException("Recipe not found with id: " + id));
// //         return RecipeMapper.mapToRecipeDto(recipe);
// //     }

// //     @Override
// //     public List<RecipeDTO> getAllRecipes() {
// //         List<Recipe> recipe = recipeRepository.findAll();
// //         return recipe.stream()
// //                 .map(RecipeMapper::mapToRecipeDto) // Corrected lambda syntax
// //                 .collect(Collectors.toList());
// //     }

// //     @Override
// // public RecipeDTO updateRecipe(Long id, RecipeDTO updatedRecipeDTO) {
// //     // Retrieve the existing recipe
// //     Recipe existingRecipe = recipeRepository.findById(id)
// //         .orElseThrow(() -> new ResourceNotFoundException("Recipe not found with id: " + id));
    
// //     // Update the recipe details (title, ingredients, steps)
// //     existingRecipe.setTitle(updatedRecipeDTO.getTitle());
// //     existingRecipe.setIngredients(updatedRecipeDTO.getIngredients());
// //     existingRecipe.setSteps(updatedRecipeDTO.getSteps());
    
// //     // Update images
// //     // Retrieve existing images and the updated image URLs
// //     List<Image> existingImages = existingRecipe.getImages();
// //     List<String> updatedImageUrls = updatedRecipeDTO.getImageUrls();
    
// //     // Remove images that are not in the updated image URLs
// //     List<Image> imagesToRemove = existingImages.stream()
// //         .filter(image -> !updatedImageUrls.contains(image.getImageUrl()))
// //         .collect(Collectors.toList());
    
// //     for (Image image : imagesToRemove) {
// //         imageRepository.delete(image);
// //         existingRecipe.getImages().remove(image);
// //     }
    
// //     // Add new images that are not already in the recipe
// //     List<Image> imagesToAdd = updatedImageUrls.stream()
// //         .filter(imageUrl -> existingImages.stream().noneMatch(image -> image.getImageUrl().equals(imageUrl)))
// //         .map(imageUrl -> {
// //             Image image = new Image();
// //             image.setImageUrl(imageUrl);
// //             image.setRecipe(existingRecipe);
// //             return image;
// //         })
// //         .collect(Collectors.toList());
    
// //     existingRecipe.getImages().addAll(imagesToAdd);
// //     imageRepository.saveAll(imagesToAdd);
    
// //     // Save the updated recipe
// //     Recipe updatedRecipe = recipeRepository.save(existingRecipe);
    
// //     // Return the updated recipe as a DTO
// //     return RecipeMapper.mapToRecipeDto(updatedRecipe);
// // }


// //     @Override
// //     public void deleteRecipe(Long id) {
        
// //         Recipe existingRecipe = recipeRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Recipe not found with id: " + id));
// //         recipeRepository.delete(existingRecipe);
// //     }
// // }


// package com.example.fitnessapp.service.impl;

// import com.example.fitnessapp.dto.RecipeDTO;
// import com.example.fitnessapp.entity.Image;
// import com.example.fitnessapp.entity.Recipe;
// import com.example.fitnessapp.exception.ResourceNotFoundException;
// import com.example.fitnessapp.mapper.RecipeMapper;
// import com.example.fitnessapp.repository.ImageRepository;
// import com.example.fitnessapp.repository.RecipeRepository;
// import com.example.fitnessapp.service.RecipeService;
// import lombok.AllArgsConstructor;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.stream.Collectors;

// @Service
// @AllArgsConstructor
// public class RecipeImpl implements RecipeService {
//     private final RecipeRepository recipeRepository;
//     private final ImageRepository imageRepository;

//     @Override
//     public RecipeDTO createRecipe(RecipeDTO recipeDTO) {
//         // Convert RecipeDTO to Recipe entity
//         Recipe recipe = RecipeMapper.mapToRecipe(recipeDTO);

//         // Save recipe entity
//         recipe = recipeRepository.save(recipe);

//         // Save associated images
//         List<Image> images = saveImagesFromLocalFolder(recipeDTO.getImageUrls(), recipe);
//         recipe.setImages(images);

//         // Save the recipe with updated images
//         recipe = recipeRepository.save(recipe);
//         return RecipeMapper.mapToRecipeDto(recipe);
//     }

//     @Override
//     public RecipeDTO getRecipeById(Long id) {
//         Recipe recipe = recipeRepository.findById(id)
//                 .orElseThrow(() -> new ResourceNotFoundException("Recipe not found with id: " + id));
//         return RecipeMapper.mapToRecipeDto(recipe);
//     }

//     @Override
//     public List<RecipeDTO> getAllRecipes() {
//         List<Recipe> recipeList = recipeRepository.findAll();
//         return recipeList.stream()
//                 .map(RecipeMapper::mapToRecipeDto)
//                 .collect(Collectors.toList());
//     }

//     @Override
//     public RecipeDTO updateRecipe(Long id, RecipeDTO updatedRecipeDTO) {
//         // Retrieve the existing recipe entity
//         Recipe existingRecipe = recipeRepository.findById(id)
//                 .orElseThrow(() -> new ResourceNotFoundException("Recipe not found with id: " + id));
        
//         // Update recipe details
//         existingRecipe.setTitle(updatedRecipeDTO.getTitle());
//         existingRecipe.setIngredients(updatedRecipeDTO.getIngredients());
//         existingRecipe.setSteps(updatedRecipeDTO.getSteps());

//         // Update images
//         List<Image> existingImages = existingRecipe.getImages();
//         List<String> updatedImageUrls = updatedRecipeDTO.getImageUrls();

//         // Handle image updates
//         List<Image> imagesToRemove = existingImages.stream()
//                 .filter(image -> !updatedImageUrls.contains(image.getImageUrl()))
//                 .collect(Collectors.toList());

//         for (Image image : imagesToRemove) {
//             imageRepository.delete(image);
//             existingRecipe.getImages().remove(image);
//         }

//         List<Image> imagesToAdd = updatedImageUrls.stream()
//                 .filter(imageUrl -> existingImages.stream().noneMatch(image -> image.getImageUrl().equals(imageUrl)))
//                 .map(imageUrl -> {
//                     Image image = new Image();
//                     image.setImageUrl(imageUrl);
//                     image.setRecipe(existingRecipe);
//                     return image;
//                 })
//                 .collect(Collectors.toList());

//         existingRecipe.getImages().addAll(imagesToAdd);
//         imageRepository.saveAll(imagesToAdd);

//         // Save the updated recipe
//         Recipe updatedRecipe = recipeRepository.save(existingRecipe);

//         // Return the updated recipe as a DTO
//         return RecipeMapper.mapToRecipeDto(updatedRecipe);
//     }

//     @Override
//     public void deleteRecipe(Long id) {
//         Recipe existingRecipe = recipeRepository.findById(id)
//                 .orElseThrow(() -> new ResourceNotFoundException("Recipe not found with id: " + id));
        
//         recipeRepository.delete(existingRecipe);
//     }

//     // Helper method to save images from the local folder
//     private List<Image> saveImagesFromLocalFolder(List<String> imageUrls, Recipe recipe) {
//         return imageUrls.stream()
//                 .map(imageUrl -> {
//                     Image image = new Image();
//                     image.setImageUrl(imageUrl);
//                     image.setRecipe(recipe);
//                     return imageRepository.save(image);
//                 })
//                 .collect(Collectors.toList());
//     }
// }



package com.example.fitnessapp.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.fitnessapp.dto.RecipeDTO;
import com.example.fitnessapp.entity.Image;
import com.example.fitnessapp.entity.Recipe;
import com.example.fitnessapp.exception.ResourceNotFoundException;
import com.example.fitnessapp.mapper.RecipeMapper;
import com.example.fitnessapp.repository.ImageRepository;
import com.example.fitnessapp.repository.RecipeRepository;
import com.example.fitnessapp.service.RecipeService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class RecipeImpl implements RecipeService{

    private RecipeRepository recipeRepository;
    private ImageRepository imageRepository;

       @Override
    public RecipeDTO createRecipe(RecipeDTO recipeDTO) {
        Recipe recipe = mapRecipeDTOToEntity(recipeDTO);
        // Save recipe
        recipe = recipeRepository.save(recipe);
        // Save associated images from local folder
        List<Image> images = saveImagesFromLocalFolder(recipeDTO.getImageUrls(), recipe);
        recipe.setImages(images);
        // Update recipe with saved images
        recipe = recipeRepository.save(recipe);
        return mapEntityToRecipeDTO(recipe);
    }

    // Helper methods for mapping between RecipeDTO and Recipe entity

    private Recipe mapRecipeDTOToEntity(RecipeDTO recipeDTO) {
        Recipe recipe = new Recipe();
        recipe.setTitle(recipeDTO.getTitle());
        recipe.setIngredients(recipeDTO.getIngredients());
        recipe.setSteps(recipeDTO.getSteps());
        return recipe;
    }

    private RecipeDTO mapEntityToRecipeDTO(Recipe recipe) {
        RecipeDTO recipeDTO = new RecipeDTO();
        recipeDTO.setId(recipe.getId());
        recipeDTO.setTitle(recipe.getTitle());
        recipeDTO.setIngredients(recipe.getIngredients());
        recipeDTO.setSteps(recipe.getSteps());
        List<String> imageUrls = recipe.getImages().stream()
                                                .map(Image::getImageUrl)
                                                .collect(Collectors.toList());
        recipeDTO.setImageUrls(imageUrls);
        return recipeDTO;
    }

    // Helper method to save images associated with a recipe from local folder
    private List<Image> saveImagesFromLocalFolder(List<String> imageUrls, Recipe recipe) {
        return imageUrls.stream()
                        .map(imageUrl -> {
                            Image image = new Image();
                            image.setImageUrl(imageUrl);
                            image.setRecipe(recipe);
                            return imageRepository.save(image);
                        })
                        .collect(Collectors.toList());
    }

    @Override
    public RecipeDTO getRecipeById(Long id) {
        Recipe recipe = recipeRepository.findById(id)
            .orElseThrow(() ->new ResourceNotFoundException("Recipe not found with id: " + id));
        return RecipeMapper.mapToRecipeDto(recipe);
    }

    @Override
    public List<RecipeDTO> getAllRecipes() {
        List<Recipe> recipe = recipeRepository.findAll();
        return recipe.stream()
                .map(RecipeMapper::mapToRecipeDto) // Corrected lambda syntax
                .collect(Collectors.toList());
    }

    @Override
public RecipeDTO updateRecipe(Long id, RecipeDTO updatedRecipeDTO) {
    // Retrieve the existing recipe
    Recipe existingRecipe = recipeRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Recipe not found with id: " + id));
    
    // Update the recipe details (title, ingredients, steps)
    existingRecipe.setTitle(updatedRecipeDTO.getTitle());
    existingRecipe.setIngredients(updatedRecipeDTO.getIngredients());
    existingRecipe.setSteps(updatedRecipeDTO.getSteps());
    
    // Update images
    // Retrieve existing images and the updated image URLs
    List<Image> existingImages = existingRecipe.getImages();
    List<String> updatedImageUrls = updatedRecipeDTO.getImageUrls();
    
    // Remove images that are not in the updated image URLs
    List<Image> imagesToRemove = existingImages.stream()
        .filter(image -> !updatedImageUrls.contains(image.getImageUrl()))
        .collect(Collectors.toList());
    
    for (Image image : imagesToRemove) {
        imageRepository.delete(image);
        existingRecipe.getImages().remove(image);
    }
    
    // Add new images that are not already in the recipe
    List<Image> imagesToAdd = updatedImageUrls.stream()
        .filter(imageUrl -> existingImages.stream().noneMatch(image -> image.getImageUrl().equals(imageUrl)))
        .map(imageUrl -> {
            Image image = new Image();
            image.setImageUrl(imageUrl);
            image.setRecipe(existingRecipe);
            return image;
        })
        .collect(Collectors.toList());
    
    existingRecipe.getImages().addAll(imagesToAdd);
    imageRepository.saveAll(imagesToAdd);
    
    // Save the updated recipe
    Recipe updatedRecipe = recipeRepository.save(existingRecipe);
    
    // Return the updated recipe as a DTO
    return RecipeMapper.mapToRecipeDto(updatedRecipe);
}


    @Override
    public void deleteRecipe(Long id) {
        
        Recipe existingRecipe = recipeRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Recipe not found with id: " + id));
        recipeRepository.delete(existingRecipe);
    }
}