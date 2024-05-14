import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const MealPlanForm = ({ show, handleClose }) => {
    // Define the initial state for meal plan form fields
    const [mealPlan, setMealPlan] = useState({
        dietaryPreferences: '',
        breakfasttime: '',
        breakfastmealName: '',
        breakfastportionSize: '',
        breakfastNutritionalInformation: '',
        lunchtime: '',
        lunchmealName: '',
        lunchportionSize: '',
        lunchNutritionalInformation: '',
        snacktime: '',
        snackmealName: '',
        snackportionSize: '',
        snackNutritionalInformation: '',
        dinnertime: '',
        dinnermealName: '',
        dinnerportionSize: '',
        dinnerNutritionalInformation: '',
    });

    // Handle input changes and update state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setMealPlan((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send a POST request to your backend API
            const response = await axios.post('http://localhost:8090/api/mealplans', mealPlan);
            
            // Handle the response (e.g., display a success message or handle errors)
            alert('Meal plan added successfully!');  // Success alert
            console.log('Meal plan added:', response.data);
            
            // Close the form
            handleClose();
        } catch (error) {
            // Display error alert
            alert('Error adding meal plan: ' + error.message);
            console.error('Error adding meal plan:', error);
        }
    };
    

    // Return null if the form is not supposed to be visible
    if (!show) {
        return null;
    }

    return (
        <div className="popup-form">
            <form onSubmit={handleSubmit} className="container bg-white p-4 rounded shadow-lg" >
                <div style={{padding:'80px',backgroundImage: "url('ww1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%'}}>
                <h2 className="text-center text-dark" style={{fontWeight:'bolder'}}>Create your personalized Meal Plan</h2><br></br>
                {/* Dietary Preferences */}
            
        <div className="row mb-3">
            <div className="col-md-12">
            <label htmlFor="breakfasttime" ></label>
                <select
                    id="dietaryPreferences"
                    name="dietaryPreferences"
                    value={mealPlan.dietaryPreferences}
                    onChange={handleChange}
                    className="form-control"
                    required
                >
                    <option value="">Select Dietary Preferences</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="gluten-free">Gluten-Free</option>
                    <option value="keto">Keto</option>
                    <option value="paleo">Paleo</option>
                    {/* Add more options as needed */}
                </select>
            </div>
        </div>

        {/* Breakfast */}
        <h5 className="text-dark ">Breakfast</h5>
        <div className="row mb-3">
            <div className="col-md-3">
                <label htmlFor="breakfasttime" >Breakfast Time</label>
                <input
                    type="time"
                    id="breakfasttime"
                    name="breakfasttime"
                    value={mealPlan.breakfasttime}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="col-md-3">
                <label htmlFor="breakfastmealName">Breakfast Meal Name</label>
                <input
                    type="text"
                    id="breakfastmealName"
                    name="breakfastmealName"
                    value={mealPlan.breakfastmealName}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="col-md-3">
                <label htmlFor="breakfastportionSize">Portion Size</label>
                <input
                    type="text"
                    id="breakfastportionSize"
                    name="breakfastportionSize"
                    value={mealPlan.breakfastportionSize}
                    onChange={handleChange}
                    className="form-control"
                    
                />
            </div>
            <div className="col-md-3">
                <label htmlFor="breakfastNutritionalInformation">Nutritional Info</label>
                <input
                    type="text"
                    id="breakfastNutritionalInformation"
                    name="breakfastNutritionalInformation"
                    value={mealPlan.breakfastNutritionalInformation}
                    onChange={handleChange}
                    className="form-control"
                    
                />
            </div>
        </div>

        {/* Lunch */}
        <h5 className="text-dark">Lunch</h5>
        <div class="row mb-3">
            <div class="col-md-3">
                <label for="lunchtime">Lunch Time</label>
                <input
                    type="time"
                    id="lunchtime"
                    name="lunchtime"
                    value={mealPlan.lunchtime}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div class="col-md-3">
                <label for="lunchmealName">Lunch Meal Name</label>
                <input
                    type="text"
                    id="lunchmealName"
                    name="lunchmealName"
                    value={mealPlan.lunchmealName}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div class="col-md-3">
                <label for="lunchportionSize">Portion Size</label>
                <input
                    type="text"
                    id="lunchportionSize"
                    name="lunchportionSize"
                    value={mealPlan.lunchportionSize}
                    onChange={handleChange}
                    className="form-control"
                   
                />
            </div>
            <div class="col-md-3">
                <label for="lunchNutritionalInformation">Nutritional Info</label>
                <input
                    type="text"
                    id="lunchNutritionalInformation"
                    name="lunchNutritionalInformation"
                    value={mealPlan.lunchNutritionalInformation}
                    onChange={handleChange}
                    className="form-control"
                   
                />
            </div>
        </div>

        {/* Snack */}
        <h5 className="text-dark">Snack</h5>
        <div class="row mb-3">
            <div class="col-md-3">
                <label for="snacktime">Snack Time</label>
                <input
                    type="time"
                    id="snacktime"
                    name="snacktime"
                    value={mealPlan.snacktime}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div class="col-md-3">
                <label for="snackmealName">Snack Meal Name</label>
                <input
                    type="text"
                    id="snackmealName"
                    name="snackmealName"
                    value={mealPlan.snackmealName}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div class="col-md-3">
                <label for="snackportionSize">Portion Size</label>
                <input
                    type="text"
                    id="snackportionSize"
                    name="snackportionSize"
                    value={mealPlan.snackportionSize}
                    onChange={handleChange}
                    className="form-control"
                   
                />
            </div>
            <div class="col-md-3">
                <label for="snackNutritionalInformation">Nutritional Info</label>
                <input
                    type="text"
                    id="snackNutritionalInformation"
                    name="snackNutritionalInformation"
                    value={mealPlan.snackNutritionalInformation}
                    onChange={handleChange}
                    className="form-control"
                   
                />
            </div>
        </div>

        {/* Dinner */}
        <h5 className="text-dark">Dinner</h5>
        <div class="row mb-3">
            <div class="col-md-3">
                <label for="dinnertime">Dinner Time</label>
                <input
                    type="time"
                    id="dinnertime"
                    name="dinnertime"
                    value={mealPlan.dinnertime}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div class="col-md-3">
                <label for="dinnermealName">Dinner Meal Name</label>
                <input
                    type="text"
                    id="dinnermealName"
                    name="dinnermealName"
                    value={mealPlan.dinnermealName}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div class="col-md-3">
                <label for="dinnerportionSize">Portion Size</label>
                <input
                    type="text"
                    id="dinnerportionSize"
                    name="dinnerportionSize"
                    value={mealPlan.dinnerportionSize}
                    onChange={handleChange}
                    className="form-control"
                  
                />
            </div>
            <div class="col-md-3">
                <label for="dinnerNutritionalInformation">Nutritional Info</label>
                <input
                    type="text"
                    id="dinnerNutritionalInformation"
                    name="dinnerNutritionalInformation"
                    value={mealPlan.dinnerNutritionalInformation}
                    onChange={handleChange}
                    className="form-control"
                
                />
            </div>
        </div>
        <br></br>
        {/* Form buttons */}
        <div class="row">
            <div class="col-md-6">
                <button type="submit" className="btn btn-dark w-100">Submit</button>
            </div>
            <div class="col-md-6">
                <button type="button" className="btn btn-outline-dark w-100" onClick={handleClose}>Cancel</button>
            </div>
        </div>
        <br></br>  </div>
            </form>
        </div>
    );
};

export default MealPlanForm;

