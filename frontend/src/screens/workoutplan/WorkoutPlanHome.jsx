import React , { useState }from 'react';
import Navbar from '../../componants/Navbar';
import '../mealplan/MealplanHome.css';
import WorkoutPlanPost from './../../componants/WorkoutPlanPost';
import { Row, Col, Container } from 'react-bootstrap'; // Import Bootstrap grid components
import AddWorkoutPlan from '../../componants/workoutPlan/WorkoutPlanForm';
import WorkoutPlanForm from '../../componants/workoutPlan/WorkoutPlanForm';
import MyUpdate from './MyUpdate';
export default function WorkoutPlanHome() {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };
    return (
        <div style={{ backgroundColor: 'black' }}>
            <Navbar />

            <div
                id='savi_1'
                style={{
                    backgroundImage: "url('sasi2.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '900px',
                }}
            >
                <div id='savi_2' style={{ padding: '120px' }}>
                    <p style={{ fontSize: '30px', fontFamily: 'fantasy', letterSpacing: '1px', color: '#CECECE' }}>
                        Consistency is the bridge between your goals and your dreams.
                    </p>
                    <p style={{ fontSize: '70px', fontFamily: 'fantasy', letterSpacing: '3px', color: 'white' }}>
                        Consistency is the<br /> bridge between<br /> your goals and your dreams.
                    </p>
                </div>
            </div>


            <div className="page1-container" style={{padding:'40px'}}>
            <div className="card" style={{
                backgroundImage: "url('s.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                borderTopRightRadius: '100px',
                borderBottomRightRadius: '100px',
                borderTopLeftRadius: '0px',
                borderBottomLeftRadius: '100px',
                display: "flex",
                flexDirection: "row",
                
            }}>
                <div className="card-body text-white">
                    <div style={{ padding: '80px', marginLeft: '900px' }}>
                        <h3>Looking a place for share your own workout plans with everyone?</h3>
                        <p style={{ fontSize: '18px' }}>Your workout plan is more than a routine—it's a source of inspiration for those who strive for progress. By sharing your fitness journey, you invite others to join in on the pursuit of wellness.Every shared workout is a step towards building a stronger, healthier world.</p>
                        
                        <h2>Together, we can transform our personal routines into a community of strength and support!!!</h2>
                        <br />
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={openPopup}>Click here to create your workout plan</button>
                        {showPopup && (
                <div className="popup-overlay">
                    <WorkoutPlanForm onClose={closePopup} />
                </div>
            )}
                        <br />
                    </div>
                </div>
            </div>
            <br></br>


        </div>
        <WorkoutPlanPost></WorkoutPlanPost>  
            
        </div>
    );
}

   







   