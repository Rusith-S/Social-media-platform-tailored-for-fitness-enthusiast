import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MealplanHome.css';

import { Carousel, Button } from 'react-bootstrap';

const Deleterecipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch recipes from the API
    const fetchRecipes = async () => {
        try {
            const response = await axios.get('http://localhost:8090/api/recipe');
            setRecipes(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching recipes:', error);
            setLoading(false);
        }
    };

    // Delete recipe from the API
    const deleteRecipe = async (id) => {
        try {
            await axios.delete(`http://localhost:8090/api/recipe/${id}`);
            // Fetch recipes again after deletion to update the list
            fetchRecipes();
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    // Group recipes into pairs for display
    const groupedRecipes = [];
    for (let i = 0; i < recipes.length; i += 2) {
        groupedRecipes.push(recipes.slice(i, i + 2));
    }

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div style={{  padding: "40px" }}>
                    {groupedRecipes.map((recipePair, index) => (
                        <div key={index} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "20px" }}>
                            {recipePair.map(recipe => (
                                <div className="card" style={{ width: "48%", backgroundColor: 'black' }} key={recipe.id}>
                                    <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                        <Carousel>
                                            {recipe.imageUrls.map((imageUrl, index) => (
                                                <Carousel.Item key={index}>
                                                    <img className="d-block w-100" src={imageUrl} alt={`Image ${index}`} />
                                                </Carousel.Item>
                                            ))}
                                        </Carousel>
                                    </div>
                                    <div className="card-body text-white" style={{ marginLeft: "20px" }}>
                                        <h3 style={{ fontWeight: 'bold' }}>{recipe.title}</h3>
                                        <br />
                                        <h5>Ingredients</h5>
                                        <ul>
                                            {recipe.ingredients.map((ingredient, index) => (
                                                <li key={index}>{ingredient}</li>
                                            ))}
                                        </ul>
                                        <h5>Instructions</h5>
                                        <ol>
                                            {recipe.steps.map((step, index) => (
                                                <li key={index}>{step}</li>
                                            ))}
                                        </ol>
                                    </div>
                                    <Button
                                    style={{width:"20%"}}
                                    variant="danger"
                                    onClick={() => deleteRecipe(recipe.id)}
                                >
                                    Delete
                                </Button>
                                   </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Deleterecipe;
