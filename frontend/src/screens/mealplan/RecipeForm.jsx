import React, { useState } from 'react';
import axios from 'axios';

function RecipeForm() {
    const [formData, setFormData] = useState({
        title: '',
        ingredients: [],
        steps: [],
        images: []
    });

    // Handle text field changes (e.g., title)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle ingredient changes
    const handleIngredientChange = (e, index) => {
        const newIngredients = [...formData.ingredients];
        newIngredients[index] = e.target.value;
        setFormData({ ...formData, ingredients: newIngredients });
    };

    // Handle step changes
    const handleStepChange = (e, index) => {
        const newSteps = [...formData.steps];
        newSteps[index] = e.target.value;
        setFormData({ ...formData, steps: newSteps });
    };

    // Handle image changes
    const handleImageChange = (e) => {
        const files = e.target.files;
        const formDataObj = new FormData();

        // Append existing form data
        formDataObj.append('title', formData.title);
        formDataObj.append('ingredients', JSON.stringify(formData.ingredients));
        formDataObj.append('steps', JSON.stringify(formData.steps));

        // Append images to the form data
        for (let i = 0; i < files.length; i++) {
            formDataObj.append('images', files[i]);
        }

        setFormData({ ...formData, images: Array.from(files) });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request with the form data
            const response = await axios.post('http://localhost:8090/api/recipe', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Recipe created successfully:', response.data);

            // Optional: Reset the form after successful submission
            setFormData({
                title: '',
                ingredients: [],
                steps: [],
                images: []
            });

        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Server responded with error status:', error.response.status);
                console.error('Error response data:', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received from server:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up the request:', error.message);
            }
        }
    };

    // Add a new ingredient field
    const addIngredientField = () => {
        setFormData({ ...formData, ingredients: [...formData.ingredients, ''] });
    };

    // Add a new step field
    const addStepField = () => {
        setFormData({ ...formData, steps: [...formData.steps, ''] });
    };

    // Render the form
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
            </label>
            <br />
            <h3>Ingredients:</h3>
            {formData.ingredients.map((ingredient, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={ingredient}
                        onChange={(e) => handleIngredientChange(e, index)}
                    />
                </div>
            ))}
            <button type="button" onClick={addIngredientField}>Add Ingredient</button>
            <br />
            <h3>Steps:</h3>
            {formData.steps.map((step, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={step}
                        onChange={(e) => handleStepChange(e, index)}
                    />
                </div>
            ))}
            <button type="button" onClick={addStepField}>Add Step</button>
            <br />
            <input type="file" multiple onChange={handleImageChange} />
            <br />
            <button type="submit">Submit Recipe</button>
        </form>
    );
}

export default RecipeForm;
