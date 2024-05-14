
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// const UpdateRecipeForm = ({ recipe, handleSubmit, handleClose, show }) => {
//     // Initialize form data with existing recipe data
//     const [formData, setFormData] = useState({
//         id: recipe?.id || '',
//         title: recipe?.title || '',
//         ingredients: recipe?.ingredients || [],
//         steps: recipe?.steps || [],
//     });

//     // Use effect to set formData when recipe changes
//     useEffect(() => {
//         if (recipe) {
//             setFormData({
//                 id: recipe.id,
//                 title: recipe.title,
//                 ingredients: recipe.ingredients,
//                 steps: recipe.steps,
//             });
//         }
//     }, [recipe]);

//     // Handle changes to the form fields
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     // Handle changes to the ingredients
//     const handleIngredientChange = (e, index) => {
//         const newIngredients = [...formData.ingredients];
//         newIngredients[index] = e.target.value;
//         setFormData({ ...formData, ingredients: newIngredients });
//     };

//     // Handle changes to the steps
//     const handleStepChange = (e, index) => {
//         const newSteps = [...formData.steps];
//         newSteps[index] = e.target.value;
//         setFormData({ ...formData, steps: newSteps });
//     };

//     // Handle changes to the images
//     const handleImageChange = (e) => {
//         const files = Array.from(e.target.files);
//         setFormData({ ...formData, images: formData.images.concat(files) });
//     };

//     const onSubmit = async (e) => {
//         e.preventDefault();
    
//         // Create a new FormData object
//         const formDataToSend = new FormData();
    
//         // Append the form fields to the FormData object
//         formDataToSend.append('id', formData.id);
//         formDataToSend.append('title', formData.title);
    
//         // Append ingredients and steps as JSON strings
//         formDataToSend.append('ingredients', JSON.stringify(formData.ingredients));
//         formDataToSend.append('steps', JSON.stringify(formData.steps));
    
       
    
//         try {
//             // Make the API request to update the recipe
//             const response = await axios.put(`http://localhost:8090/api/recipe/${formData.id}`, formDataToSend, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
    
//             if (response.status === 200) {
//                 // Handle successful update
//                 handleSubmit(formData);
//             } else {
//                 console.error(`Error updating recipe: ${response.statusText}`);
//             }
//         } catch (error) {
//             console.error(`Error updating recipe: ${error}`);
//         }
//     };
    

//     // Add new ingredient field
//     const addIngredientField = () => {
//         setFormData({ ...formData, ingredients: [...formData.ingredients, ''] });
//     };

//     // Add new step field
//     const addStepField = () => {
//         setFormData({ ...formData, steps: [...formData.steps, ''] });
//     };

//     return (
//         <div className={`recipe-form ${show ? 'show' : ''}`}>
//             <div className="form-container">
//                 <button onClick={handleClose} className="close-button">Close</button>
//                 <h3>{recipe ? 'Edit Recipe' : 'Create Recipe'}</h3>
//                 <form onSubmit={onSubmit}>
//                     <div>
//                         <label>Title:</label>
//                         <input type="text" name="title" value={formData.title} onChange={handleChange} />
//                     </div>
//                     <div>
//                         <h4>Ingredients:</h4>
//                         {formData.ingredients.map((ingredient, index) => (
//                             <div key={index}>
//                                 <input type="text" value={ingredient} onChange={(e) => handleIngredientChange(e, index)} />
//                             </div>
//                         ))}
//                         <button type="button" onClick={addIngredientField}>Add Ingredient</button>
//                     </div>
//                     <div>
//                         <h4>Steps:</h4>
//                         {formData.steps.map((step, index) => (
//                             <div key={index}>
//                                 <input type="text" value={step} onChange={(e) => handleStepChange(e, index)} />
//                             </div>
//                         ))}
//                         <button type="button" onClick={addStepField}>Add Step</button>
//                     </div>
                    
//                     <button type="submit">{recipe ? 'Update Recipe' : 'Create Recipe'}</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default UpdateRecipeForm;
