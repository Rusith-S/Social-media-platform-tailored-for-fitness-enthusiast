 import React, { useState, useEffect } from 'react'
import './MealplanHome.css'
import MealPlanForm from './MealplanForm'
export default function Page1() {
  const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    const [mealplans, setMealplans] = useState([]);

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
  return (
    <div>


<div className="page1-container">
            <div className="card" style={{
                backgroundImage: "url('food.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                borderTopRightRadius: '100px',
                borderBottomRightRadius: '100px',
                borderTopLeftRadius: '0px',
                borderBottomLeftRadius: '100px',
                display: "flex",
                flexDirection: "row"
            }}>
                <div className="card-body">
                    <div style={{ padding: '20px', marginLeft: '700px' }}>
                        <h3>Need a place for create your own meal plans and share it with everyone?</h3>
                        <p style={{ fontSize: '18px' }}>Discover the power of personalized meal planning tailored to your specific dietary preferences and nutritional needs. Take control of your health and wellness by creating your own customized meal plans, then share your creations with your friends and family to inspire positive changes and foster healthier habits in your daily routines. Together, you can make a meaningful difference in your lives by prioritizing balanced, nutritious meals.</p>
                        <h2>Plan your healthy meals for today and everyday!!!</h2>
                        <br />
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={openForm}>Click here to create your own meal plan</button>
                        {/* Render the MealPlanForm when isFormOpen is true */}
                        {isFormOpen && (
                            <div className="popup-overlay" onClick={closeForm}>
                                <div  onClick={(e) => e.stopPropagation()}>
                                    <MealPlanForm show={isFormOpen} handleClose={closeForm} />
                                </div>
                            </div>
                        )}
                        <br />
                    </div>
                </div>
            </div>
        </div>

<br></br>


<div className="meal-plans-container">
                {mealplans.map((mealplan, index) => (
                    <div className="col-sm-6" style={{ padding: '20px' }} key={mealplan.id}>
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
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

      {/* <div className="meal-plans-container">
            {mealplans.map(mealplan => (
                <div className="col-sm-6" style={{ padding: '20px'}} key={mealplan.id}>
                    <div className="card" style={{backgroundImage: "url('meal1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}>
                        <div className="card-body">
                            <h5 className="text-white" style={{fontWeight: "bolder"}}><i className="fas fa-user"></i>&nbsp; &nbsp; {mealplan.dietaryPreferences}</h5>
                            <br />
                            <div className="row">
                                <div className="card col-sm-5" style={{ marginRight: '20px', opacity: '0.9', backgroundColor: "black" }}>
                                    <div className="card-body text-white">
                                        <p style={{ fontSize: "25px" }}>&#127859; &nbsp;&nbsp;Breakfast - {mealplan.breakfasttime}</p>
                                        <div>
                                            <p style={{ fontSize: "22px", fontWeight: "bold", textAlign: 'center' }}>{mealplan.breakfastmealName}</p>
                                            <p style={{ fontSize: "20px", fontWeight: "bold", textAlign: 'center' }}>{mealplan.breakfastportionSize}</p>
                                            <p><span className="red-dot"></span>{mealplan.breakfastNutritionalInformation}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card col-sm-5" style={{ marginRight: '20px', opacity: '0.9', backgroundColor: "black" }}>
                                    <div className="card-body text-white">
                                        <p style={{ fontSize: "25px" }}>&#127837; &nbsp;&nbsp;Lunch - {mealplan.lunchtime}</p>
                                        <div>
                                            <p style={{ fontSize: "22px", fontWeight: "bold", textAlign: 'center' }}>{mealplan.lunchmealName}</p>
                                            <p style={{ fontSize: "20px", fontWeight: "bold", textAlign: 'center' }}>{mealplan.lunchportionSize}</p>
                                            <p><span className="red-dot"></span>{mealplan.lunchNutritionalInformation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="card col-sm-5" style={{ marginRight: '20px', opacity: '0.9', backgroundColor: "black" }}>
                                    <div className="card-body text-white">
                                        <p style={{ fontSize: "25px" }}>&#127856; &nbsp;&nbsp;Snack - {mealplan.snacktime}</p>
                                        <div>
                                            <p style={{ fontSize: "22px", fontWeight: "bold", textAlign: 'center' }}>{mealplan.snackmealName}</p>
                                            <p style={{ fontSize: "20px", fontWeight: "bold", textAlign: 'center' }}>{mealplan.snackportionSize}</p>
                                            <p><span className="red-dot"></span>{mealplan.snackNutritionalInformation}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card col-sm-5" style={{ marginRight: '20px', opacity: '0.9', backgroundColor: "black" }}>
                                    <div className="card-body text-white">
                                        <p style={{ fontSize: "25px" }}>&#129367; &nbsp;&nbsp;Dinner - {mealplan.dinnertime}</p>
                                        <div>
                                            <p style={{ fontSize: "22px", fontWeight: "bold", textAlign: 'center' }}>{mealplan.dinnermealName}</p>
                                            <p style={{ fontSize: "20px", fontWeight: "bold", textAlign: 'center' }}>{mealplan.dinnerportionSize}</p>
                                            <p><span className="red-dot"></span>{mealplan.dinnerNutritionalInformation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div> */}
    </div>
  )
}
