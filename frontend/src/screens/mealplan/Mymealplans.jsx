import React, { useState, useEffect } from 'react'
import './MealplanHome.css'
import Updateform from './Updateform';
import { Button } from 'react-bootstrap';
export default function Mymealplans() {

    const [mealplans, setMealplans] = useState([]);
    const [selectedMealPlan, setSelectedMealPlan] = useState(null); // For storing selected meal plan
    const [showModal, setShowModal] = useState(false); // Toggle form visibility

    const backgroundImageList = [
        'meal1.jpg',
        'blue.jpeg',
        'meal4.jpg',
        'meal5.jpg',
        // Add more URLs as needed
    ];

    const fetchMealPlans = async () => {
        try {
            const response = await fetch('http://localhost:8090/api/mealplans');
            // Check the response headers
            const contentType = response.headers.get('Content-Type');
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
                setMealplans(data);
            } else {
                console.error('Unexpected content type:', contentType);
            }
        } catch (error) {
            console.error('Error fetching meal plans:', error);
        }
    };
    
    // Fetch data when the component is mounted
    useEffect(() => {
        fetchMealPlans();
    }, []);

    // Handle delete meal plan
    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:8090/api/mealplans/${id}`, {
                method: 'DELETE',
            });
            // Remove deleted meal plan from the list
            setMealplans((prev) => prev.filter((mealplan) => mealplan.id !== id));
            alert("Mealplans deleted succussfully!!!")
        } catch (error) {
            console.error('Error deleting meal plan:', error);
        }
    };

    // Handle edit button click
    const handleEdit = (mealPlan) => {
        setSelectedMealPlan(mealPlan);
        setShowModal(true);
    };

    // Handle form close
    const handleFormClose = () => {
        setShowModal(false);
        fetchMealPlans(); // Refresh meal plans
    };

  return (
    <div>

        <div className="meal-plans-container">
                {mealplans.map((mealplan, index) => (
                    <div className="col-sm-6" style={{ padding: '50px' }} key={mealplan.id}>
                        <div
                            className="card"
                            style={{
                                backgroundImage: `url(${backgroundImageList[index % backgroundImageList.length]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '100%',
                            }}
                        >
                            <div className="card-body">
                                <h5 className="text-white" style={{ fontWeight: 'bolder' }}>
                                    <i className="fas fa-user"></i>&nbsp; &nbsp; {mealplan.dietaryPreferences}
                                </h5>
                                <br />
                                <div className="row">
                                    <div
                                        className="card col-sm-5"
                                        style={{
                                            marginRight: '20px',
                                            opacity: '0.9',
                                            backgroundColor: 'black',
                                        }}
                                    >
                                        <div className="card-body text-white">
                                            <p style={{ fontSize: '25px' }}>
                                                &#127859; &nbsp;&nbsp;Breakfast - {mealplan.breakfasttime}
                                            </p>
                                            <div>
                                                <p style={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}>
                                                    {mealplan.breakfastmealName}
                                                </p>
                                                <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>
                                                    {mealplan.breakfastportionSize}
                                                </p>
                                                <p>
                                                    <span className="red-dot"></span>
                                                    {mealplan.breakfastNutritionalInformation}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card col-sm-5"
                                        style={{
                                            marginRight: '20px',
                                            opacity: '0.9',
                                            backgroundColor: 'black',
                                        }}
                                    >
                                        <div className="card-body text-white">
                                            <p style={{ fontSize: '25px' }}>
                                                &#127837; &nbsp;&nbsp;Lunch - {mealplan.lunchtime}
                                            </p>
                                            <div>
                                                <p style={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}>
                                                    {mealplan.lunchmealName}
                                                </p>
                                                <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>
                                                    {mealplan.lunchportionSize}
                                                </p>
                                                <p>
                                                    <span className="red-dot"></span>
                                                    {mealplan.lunchNutritionalInformation}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div
                                        className="card col-sm-5"
                                        style={{
                                            marginRight: '20px',
                                            opacity: '0.9',
                                            backgroundColor: 'black',
                                        }}
                                    >
                                        <div className="card-body text-white">
                                            <p style={{ fontSize: '25px' }}>
                                                &#127856; &nbsp;&nbsp;Snack - {mealplan.snacktime}
                                            </p>
                                            <div>
                                                <p style={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}>
                                                    {mealplan.snackmealName}
                                                </p>
                                                <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>
                                                    {mealplan.snackportionSize}
                                                </p>
                                                <p>
                                                    <span className="red-dot"></span>
                                                    {mealplan.snackNutritionalInformation}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card col-sm-5"
                                        style={{
                                            marginRight: '20px',
                                            opacity: '0.9',
                                            backgroundColor: 'black',
                                        }}
                                    >
                                        <div className="card-body text-white">
                                            <p style={{ fontSize: '25px' }}>
                                                &#129367; &nbsp;&nbsp;Dinner - {mealplan.dinnertime}
                                            </p>
                                            <div>
                                                <p style={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}>
                                                    {mealplan.dinnermealName}
                                                </p>
                                                <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>
                                                    {mealplan.dinnerportionSize}
                                                </p>
                                                <p>
                                                    <span className="red-dot"></span>
                                                    {mealplan.dinnerNutritionalInformation}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div><br></br>
                                {/* Add Edit and Delete buttons */}
                                <div className="button-group">
                                    <Button
                                        className="btn btn-primary me-2"
                                        onClick={() => handleEdit(mealplan)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(mealplan.id)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                {showModal && (
                <Updateform
                    show={showModal}
                    handleClose={handleFormClose}
                    mealPlan={selectedMealPlan}
                />
            )}

    </div>
  )
}
