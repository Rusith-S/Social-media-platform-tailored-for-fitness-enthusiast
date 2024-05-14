import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import Recipe from './Recipe';
import './MealplanHome.css'
const RecipeList= () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

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

    return (
        <div>
            
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div style={{ backgroundColor: "black", padding: "40px" }}>
                     <div>
                        <div class="card" style={{backgroundImage: "url('recipie1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%',borderTopRightRadius: '100px', borderBottomRightRadius: '100px',borderTopLeftRadius: '0px', borderBottomLeftRadius: '100px', display: "flex", flexDirection: "row"}}>
                            <div class="card-body">
                            <div style={{padding:'20px',}}>
                            <h3>Looking a place for share your favourite healthy recipies ?</h3>
                            <p style={{fontSize:'18px'}}>There you go!!! share you healthy meal tips with the world !!!<br></br>Unleash your passion for healthy eating and share your top meal tips with the world! Whether it's simple ingredient swaps, <br></br>creative recipes, or smart portion control, your insights can inspire others to embrace nutritious habits.<br></br> Let's build a community that prioritizes balanced, wholesome meals for a vibrant and healthy lifestyle!</p>
                            
                            <br></br>
                            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={openForm}>Click here to share your recipies</button>
                            {isFormOpen && (
                            <div className="popup-overlay" onClick={closeForm}>
                                <div  onClick={(e) => e.stopPropagation()}>
                                    <Recipe show={isFormOpen} handleClose={closeForm} />
                                </div>
                            </div>
                        )}
                        <br></br>
                        </div>
                            </div>
                        </div>
                        </div>
                    <br></br>
                    {recipes.map(recipe => (
                        <div className="card" style={{ width: "100%", display: "flex", flexDirection: "row" ,backgroundColor:'black'}} key={recipe.id}>
                            <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <Carousel>
                                    {recipe.imageUrls.map((imageUrl, index) => (
                                        <Carousel.Item key={index}>
                                            <img className="d-block w-100" src={imageUrl} alt={`Image ${index}`} />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                            <div className="card-body text-white" style={{marginLeft:"20px"}}>
                                <h3 style={{fontWeight:'bold'}}>{recipe.title}</h3><br></br>
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
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default RecipeList;

