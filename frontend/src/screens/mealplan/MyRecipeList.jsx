// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Carousel } from 'react-bootstrap';
// import UpdateRecipeForm from './UpdateRecipeForm';
// import './MealplanHome.css';

// const MyRecipeList = () => {
//     const [recipes, setRecipes] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [isFormOpen, setIsFormOpen] = useState(false);
//     const [currentRecipe, setCurrentRecipe] = useState(null);

//     useEffect(() => {
//         fetchRecipes();
//     }, []);

//     const fetchRecipes = async () => {
//         try {
//             const response = await axios.get('http://localhost:8090/api/recipe');
//             setRecipes(response.data);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching recipes:', error);
//             setLoading(false);
//         }
//     };

//     const openEditForm = (recipe) => {
//         if (recipe) {
//             // Set the current recipe to edit with its id
//             setCurrentRecipe(recipe);
//         } else {
//             // Handle the case where the recipe is undefined or new
//             setCurrentRecipe({
//                 title: '',
//                 ingredients: [],
//                 steps: [],
//                 images: [],
//             });
//         }
//         setIsFormOpen(true);
//     };
    
    
    

//     const closeForm = () => {
//         setIsFormOpen(false);
//         setCurrentRecipe(null);
//     };

//     const deleteRecipe = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8090/api/recipe/${id}`);
//             // Update the recipes list after deletion
//             fetchRecipes();
//         } catch (error) {
//             console.error('Error deleting recipe:', error);
//         }
//     };

//     // const handleFormSubmit = async (formData) => {
//     //     console.log('Form data being submitted:', formData);
//     //     if (!formData.id) {
//     //         console.error('Form data is missing an ID.');
//     //         return;
//     //     }
//     //     try {
//     //         await axios.put(`http://localhost:8090/api/recipe/${formData.id}`, formData);
//     //         fetchRecipes();
//     //         closeForm();
//     //     } catch (error) {
//     //         console.error('Error updating recipe:', error);
//     //         if (error.response) {
//     //             console.error('Server responded with error data:', error.response.data);
//     //         }
//     //     }
//     // };
    
    
    

//     return (
//         <div>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <div style={{ backgroundColor: 'black', padding: '40px' }}>
//                     <div>
//                         <div
//                             className="card"
//                             style={{
//                                 backgroundImage: "url('recipie1.jpg')",
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                                 width: '100%',
//                                 borderTopRightRadius: '100px',
//                                 borderBottomRightRadius: '100px',
//                                 borderTopLeftRadius: '0px',
//                                 borderBottomLeftRadius: '100px',
//                                 display: 'flex',
//                                 flexDirection: 'row',
//                             }}
//                         >
//                             <div className="card-body">
//                                 <div style={{ padding: '20px' }}>
//                                     <h3>Looking for a place to share your favorite healthy recipes?</h3>
//                                     <p style={{ fontSize: '18px' }}>
//                                         Share your healthy meal tips with the world! Unleash your passion for healthy eating and share your top meal tips.
//                                     </p>
//                                     <br />
//                                     <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => openEditForm(null)}>
//                                         Click here to share your recipes
//                                     </button>
//                                     <br />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <br />
//                     {recipes.map((recipe) => (
//                         <div className="card" style={{ width: '100%', display: 'flex', flexDirection: 'row', backgroundColor: 'black' }} key={recipe.id}>
//                             <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
//                                 <Carousel>
//                                     {recipe.imageUrls.map((imageUrl, index) => (
//                                         <Carousel.Item key={index}>
//                                             <img className="d-block w-100" src={imageUrl} alt={`Image ${index}`} />
//                                         </Carousel.Item>
//                                     ))}
//                                 </Carousel>
//                             </div>
//                             <div className="card-body text-white" style={{ marginLeft: '20px' }}>
//                                 <h3 style={{ fontWeight: 'bold' }}>{recipe.title}</h3>
//                                 <br />
//                                 <h5>Ingredients</h5>
//                                 <ul>
//                                     {recipe.ingredients.map((ingredient, index) => (
//                                         <li key={index}>{ingredient}</li>
//                                     ))}
//                                 </ul>
//                                 <h5>Instructions</h5>
//                                 <ol>
//                                     {recipe.steps.map((step, index) => (
//                                         <li key={index}>{step}</li>
//                                     ))}
//                                 </ol>
                                
//                                 <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//            {/* {isFormOpen && (
//     <div className="popup-overlay" onClick={closeForm}>
//         <div onClick={(e) => e.stopPropagation()}>
//             <UpdateRecipeForm
//                 key={currentRecipe ? currentRecipe.id : 'new'}
//                 recipe={currentRecipe}
//                 handleSubmit={handleFormSubmit}
//                 handleClose={closeForm}
//                 show={isFormOpen}
//             />
//         </div>
//     </div>
// )} */}


//         </div>
//     );
// };

// export default MyRecipeList;
