import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
const Recipe= ({ show, handleClose }) =>  {
    const [formData, setFormData] = useState({
        title: '',
        ingredients: [],
        steps: [],
        images: []
    });
    const [imageError, setImageError] = useState('');
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
        setFormData({ ...formData, images: files });

  // Validate number of images
  if (files.length < 1 || files.length > 3) {
    setImageError('You can only upload between 1 and 3 images.');
    return; // Don't proceed if validation fails
} else {
    setImageError(''); // Clear any previous error
}
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
// Check if there's an image error
if (imageError) {
    alert(imageError);
    return; // Don't submit the form
}
        try {
            const formDataObj = new FormData();
            formDataObj.append('title', formData.title);
            formDataObj.append('ingredients', JSON.stringify(formData.ingredients));
            formDataObj.append('steps', JSON.stringify(formData.steps));
            for (let i = 0; i < formData.images.length; i++) {
                formDataObj.append('images', formData.images[i]);
            }

            // Send a POST request with the form data
            const response = await axios.post('http://localhost:8090/api/recipe', formDataObj, {
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
            handleClose();

        } catch (error) {
            console.error('Error creating recipe:', error);
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
    if (!show) {
        return null;
    }
    // Render the form
    return (
        <div className="popup-form">
        <form onSubmit={handleSubmit} className="container bg-white p-4 rounded shadow-lg">
        <div style={{padding:'80px',backgroundImage: "url('ww1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%'}}>
                    <h2 className="text-center text-dark" style={{fontWeight:'bolder'}}>Share your delicious healthy recipe</h2><br></br>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title:</label>
                <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Ingredients:</label>
                {formData.ingredients.map((ingredient, index) => (
                    <div key={index} className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={ingredient}
                            onChange={(e) => handleIngredientChange(e, index)}
                        />
                    </div>
                ))}
                <button type="button" className="btn btn-outline-dark w-100" onClick={addIngredientField}>Add Ingredient</button>
            </div>
            <div className="mb-3">
            <label htmlFor="title" className="form-label">Instructions:</label>
                {formData.steps.map((step, index) => (
                    <div key={index} className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={step}
                            onChange={(e) => handleStepChange(e, index)}
                        />
                    </div>
                ))}
                <button type="button" className="btn btn-outline-dark w-100" onClick={addStepField}>Add Step</button>
            </div>
            <div className="mb-3">
                <label htmlFor="images" className="form-label">Images:</label>
                <input type="file" className="form-control" id="images" multiple onChange={handleImageChange} />
                {imageError && <div className="text-danger">{imageError}</div>}
            </div><br></br>
            <div class="row">
            <div class="col-md-6">
                <button type="submit" className="btn btn-dark w-100">Submit Recipe</button>
            </div>
            <div class="col-md-6">
                <button type="button" className="btn btn-outline-dark w-100" onClick={handleClose}>Cancel</button>
            </div>
        </div>
        </div>
        </form>
    </div>
    );
}

export default Recipe;
