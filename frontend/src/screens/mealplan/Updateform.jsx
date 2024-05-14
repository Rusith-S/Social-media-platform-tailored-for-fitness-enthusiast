import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealPlanForm from './MealplanForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
 const Updateform= ({ show, handleClose, mealPlan }) => {

    // Initialize the state with the meal plan if provided
    const initialMealPlan = mealPlan || {
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
    };
    const [currentMealPlan, setCurrentMealPlan] = useState(initialMealPlan);

    useEffect(() => {
        // Update the form fields with the meal plan data when the component receives a new meal plan
        if (mealPlan) {
            setCurrentMealPlan(mealPlan);
        }
    }, [mealPlan]);

    // Handle input change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentMealPlan({ ...currentMealPlan, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (currentMealPlan.id) {
                // Update the existing meal plan
                await axios.put(`http://localhost:8090/api/mealplans/${currentMealPlan.id}`, currentMealPlan);
            } else {
                // Create a new meal plan
                await axios.post('http://localhost:8090/api/mealplans', currentMealPlan);
            }
            alert("Mealplans updated succussfully!!!")
            handleClose();
        } catch (error) {
            alert("Error updating mealplans!!!")
            console.error('Error submitting form:', error);
        }
    };

  return (
            <Modal show={show} onHide={handleClose} >
            
            <Modal.Body>
                        <form onSubmit={handleSubmit} className="container bg-white p-4 rounded shadow-lg" style={{width:'1050px'}}>
                        <div style={{padding:'80px',backgroundImage: "url('ww1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '1000px'}}>
                <h2 className="text-center text-dark" style={{fontWeight:'bolder'}}>Update your Meal Plan</h2><br></br>
                
                            <div className="form-group">
                                <label>Dietary Preferences</label>
                                <input
                                    type="text"
                                    name="dietaryPreferences"
                                    value={currentMealPlan.dietaryPreferences}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div><br></br><br></br>
                            <div className="row mb-3">
                            <div className="form-group col-md-3">
                                <label>Breakfast Time</label>
                                <input
                                    type="text"
                                    name="breakfasttime"
                                    value={currentMealPlan.breakfasttime}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            {/* Add more fields for other meal details */}
                            
                          

                            {/* Add input fields for meal names and portion sizes */}
                            <div className="form-group col-md-3">
                                <label>Breakfast Meal Name</label>
                                <input
                                    type="text"
                                    name="breakfastmealName"
                                    value={currentMealPlan.breakfastmealName}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group col-md-3">
                                <label>Breakfast Portion Size</label>
                                <input
                                    type="text"
                                    name="breakfastportionSize"
                                    value={currentMealPlan.breakfastportionSize}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="breakfastNutritionalInformation"> Breakfast Nutritional Info</label>
                                <input
                                    type="text"
                                    name="breakfastNutritionalInformation"
                                    value={currentMealPlan.breakfastNutritionalInformation}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    
                                />
                            </div>
                            </div><br></br>
                           
                            <div className="row mb-3">
                            <div className="form-group col-md-3">
                                <label>Lunch Time</label>
                                <input
                                    type="text"
                                    name="lunchtime"
                                    value={currentMealPlan.lunchtime}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group col-md-3">
                                <label>Lunch Meal Name</label>
                                <input
                                    type="text"
                                    name="lunchmealName"
                                    value={currentMealPlan.lunchmealName}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group col-md-3">
                                <label>Lunch Portion Size</label>
                                <input
                                    type="text"
                                    name="lunchportionSize"
                                    value={currentMealPlan.lunchportionSize}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="lunchNutritionalInformation"> lunch Nutritional Info</label>
                                <input
                                    type="text"
                                    name="lunchNutritionalInformation"
                                    value={currentMealPlan.lunchNutritionalInformation}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    
                                />
                            </div></div><br></br>
                            <div className="row mb-3">
                            <div className="form-group col-md-3">
                                <label>Snack Time</label>
                                <input
                                    type="text"
                                    name="snacktime"
                                    value={currentMealPlan.snacktime}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group col-md-3">
                                <label>Snack Meal Name</label>
                                <input
                                    type="text"
                                    name="snackmealName"
                                    value={currentMealPlan.snackmealName}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group col-md-3">
                                <label>Snack Portion Size</label>
                                <input
                                    type="text"
                                    name="snackportionSize"
                                    value={currentMealPlan.snackportionSize}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="snackNutritionalInformation"> snack Nutritional Info</label>
                                <input
                                    type="text"
                                    name="snackNutritionalInformation"
                                    value={currentMealPlan.snackNutritionalInformation}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    
                                />
                            </div></div><br></br>
                            <div className="row mb-3">
                            <div className="form-group col-md-3">
                                <label>Dinner Time</label>
                                <input
                                    type="text"
                                    name="dinnertime"
                                    value={currentMealPlan.dinnertime}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group col-md-3">
                                <label>Dinner Meal Name</label>
                                <input
                                    type="text"
                                    name="dinnermealName"
                                    value={currentMealPlan.dinnermealName}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group col-md-3">
                                <label>Dinner Portion Size</label>
                                <input
                                    type="text"
                                    name="dinnerportionSize"
                                    value={currentMealPlan.dinnerportionSize}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                             
                            <div className="form-group col-md-3">
                                <label htmlFor="dinnerNutritionalInformation"> dinner Nutritional Info</label>
                                <input
                                    type="text"
                                    name="dinnerNutritionalInformation"
                                    value={currentMealPlan.dinnerNutritionalInformation}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    
                                />
                            </div></div><br></br>
                            <div class="row">
            <div class="col-md-6">
                <button type="submit" className="btn btn-dark w-100">Submit</button>
            </div>
            <div class="col-md-6">
                <button type="button" className="btn btn-outline-dark w-100" onClick={handleClose}>Cancel</button>
            </div>
        </div>
                            </div>
                </form>
            </Modal.Body>
        </Modal>
  );
};
export default Updateform;
