import React, { useState } from 'react';
import Navbar from '../../componants/Navbar';
import AddcurrentworkoutStatus from '../../componants/Current-Workout-Status/AddWorkoutstatus'; 
import WorkoutMetrics from '../../componants/Current-Workout-Status/CurrentWorkutStatusStat'
import './workoutstatusHome.css';

export default function WorkoutStatusHome() {
  const [showModal, setShowModal] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Navbar />
      <div
        id='savi_1'
        style={{
          backgroundImage: "url('WorkoutStatusHome2.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '900px',
        }}
      >
        <div id='savi_2' style={{ padding: '120px' }}>
          <p style={{ fontSize: '30px', fontFamily: 'fantasy', letterSpacing: '1px', color: '#f0e4e4' }}>
            Success is the sum of small efforts, repeated day in and day out.
          </p>
          <p style={{ fontSize: '70px', fontFamily: 'fantasy', letterSpacing: '3px', color: '#f0e4e4' }}>
            Consistency is the<br />key to unlocking<br />your dreams.
          </p>
        </div>
      </div>

      <div style={{ padding: '40px', color: '#CECECE' }}>
        <div className="page1-container">
          <div className="card" style={{
            backgroundImage: "url('WorkoutStatusHome3.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition:"center",
            width: '100%',
            borderTopRightRadius: '50px',
            borderBottomRightRadius: '50px',
            borderBottomLeftRadius: '50px',
            display: "flex",
            flexDirection: "row"
          }}>
            <div className="card-body">
              <div style={{ paddingBottom: '100px', marginLeft: '700px' ,marginTop: '30px'}}>
                <div style={{ paddingTop: '20px', marginLeft: '7px' }}>
                  <h2>Need a place to create your own workout plans and track your progress?</h2>
                  <p style={{ fontSize: '20px' }}>Discover the power of personalized workout planning tailored to your fitness goals and needs. Take control of your health and wellness by creating customized workout schedules, then track your progress to achieve your fitness dreams.</p>
                  <h2>Plan your workout status today and stay healthy</h2>
                  <br/>
                </div>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={toggleModal}>
                  Click here to add your current workout status
                </button>
                {showModal && (
                    <div className="popup-overlay" onClick={toggleModal}>
                        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        {/* Pass a function to onClose prop to handle modal close */}
                        <AddcurrentworkoutStatus onClose={toggleModal} />
            
                        </div>
                    </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
      
        <WorkoutMetrics/>
      <div>

      </div>
    </div>
  );
}
