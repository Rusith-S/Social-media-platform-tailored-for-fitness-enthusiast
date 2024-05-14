import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './currentWorkutStatusStats.scss'; // Import your CSS file

const WorkoutMetrics = () => {
    const [workoutData, setWorkoutData] = useState(null);
    const [refreshTimer, setRefreshTimer] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8060/api/currentWorkoutStatus');
            setWorkoutData(response.data);
        } catch (error) {
            console.error('Error fetching workout data:', error);
        }
    };

    useEffect(() => {
        // Initial data fetch on component mount
        fetchData();

        // Set up interval to fetch data every 2 seconds
        const timer = setInterval(() => {
            fetchData();
        }, 2000);

        setRefreshTimer(timer);

        // Clean up the interval on component unmount
        return () => {
            clearInterval(refreshTimer);
        };
    }, []); // Empty dependency array to run effect only once on mount

    const calculateTotal = (metricKey) => {
        if (!workoutData) return 0;

        return workoutData.reduce((total, workout) => {
            return total + workout[metricKey];
        }, 0);
    };
    return (
        <div className='Russsa_CurrentWorkoutStatus_Stats'>
            <h2 className="text-center mt-4 mb-4" style={{ color: "#b3cde0" }}>
                Your All Time Workout Stats
            </h2>
            <div className="container mt-5">
                <div className="row">
                    {workoutData && (
                        <>
                            {/* Pushups Card */}
                            
                            <div className="col-md-4">
                                <div className="card-header">Pushups</div>
                                <div className={`card border-primary mb-3 workout-card pushups-card`}>

                                    <div className="card-body text-primary">
                                        <h5 className="card-title">{calculateTotal('no_of_Push_ups')}</h5>
                                        <p className="card-text">Total number of pushups completed.</p>
                                    </div>
                                </div>

                            </div>

                            {/* Distance Ran Card */}
                            <div className="col-md-4">
                            <div className="card-header">Distance Ran</div>
                                <div className={`card border-primary mb-3 workout-card distance-card`}>
                                    
                                    <div className="card-body text-primary">
                                        <h5 className="card-title">{calculateTotal('distance_Ran')}</h5>
                                        <p className="card-text">Total distance ran (in Kilometers).</p>
                                    </div>
                                </div>
                            </div>

                            {/* Lunges Card */}
                            <div className="col-md-4">
                                <div className="card-header">Lunges</div>
                                <div className={`card border-primary mb-3 workout-card lunges-card`}>
                                    
                                    <div className="card-body text-primary">
                                        <h5 className="card-title">{calculateTotal('no_of_Lunges')}</h5>
                                        <p className="card-text">Total number of lunges completed.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Squats Card */}
                            <div className="col-md-4">
                                <div className="card-header">Squats</div>
                                <div className={`card border-primary mb-3 workout-card squats-card`}>

                                    <div className="card-body text-primary">
                                        <h5 className="card-title">{calculateTotal('no_of_Squats')}</h5>
                                        <p className="card-text">Total number of squats completed.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Planks Card */}
                            <div className="col-md-4">
                                <div className="card-header">Planks</div>
                                <div className={`card border-primary mb-3 workout-card planks-card`}>

                                    <div className="card-body text-primary">
                                        <h5 className="card-title">{calculateTotal('no_of_Planks')}</h5>
                                        <p className="card-text">Total time on planks completed (in Seconds).</p>
                                    </div>
                                </div>
                            </div>

                            {/* Weight Lifted Card */}
                            <div className="col-md-4">
                                <div className="card-header">Weight Lifted</div>
                                <div className={`card border-primary mb-3 workout-card weight-card`}>

                                    <div className="card-body text-primary">
                                        <h5 className="card-title">{calculateTotal('weight_Lifted')}</h5>
                                        <p className="card-text">Total weight lifted (in kg).</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    <Link to="/PreviousWorkouts" className="form-submit-btn">
                        Click Here to View Your Previous Workout Records
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default WorkoutMetrics;