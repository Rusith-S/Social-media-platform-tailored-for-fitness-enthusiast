import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const WorkoutPlanPost = () => {
    const [workoutPlans, setWorkoutPlans] = useState([]);
    const [error, setError] = useState(null);

    const fetchWorkoutPlans = async () => {
        try {
            const response = await fetch('http://localhost:8090/api/workoutplans');
            if (response.ok) {
                const data = await response.json();
                console.log('Fetched workout plans:', data);
                setWorkoutPlans(data);
            } else {
                throw new Error(`Failed to fetch workout plans: ${response.statusText}`);
            }
        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    };

    const backgroundImageList = [
        'WeightLifting.jpg',
        'WorkoutStatusHome4.jpeg',
        'sasi.jpg',
        'WorkoutSlider4.jpg',
        // Add more URLs as needed
    ];

    useEffect(() => {
        fetchWorkoutPlans();
    }, []);

    return (
        <div className="container" >
            {error && (
                <div className="alert alert-danger" role="alert">
                    Error: {error}
                </div>
            )}

            <div className="row" >
                {workoutPlans.map((workoutPlan, index) => (
                    <div className={"col-sm-6 mb-4"} key={workoutPlan.id} >
                        <div
                            className="card"
                            style={{
                                backgroundImage: `url(${backgroundImageList[index % backgroundImageList.length]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                
                            }}
                        >
                            <div className="card-body" style={{ marginRight: '20px',
                                            opacity: '0.85',
                                            backgroundColor: 'black',
                                            padding:'80px'}}>
                                <h4 className="text-light font-weight-bold">
                                    <i className="fas fa-user"></i> {workoutPlan.title}
                                </h4><br></br>

                                {/* Routines */}
                                <div className="row">
                                <div className="card-body text-light">
                                    <h5>Routines:</h5>
                                    <ul style={{fontSize:'18px'}}>
                                        {workoutPlan.routines && workoutPlan.routines.map((routine, routineIndex) => (
                                            <li key={routineIndex}>{routine}</li>
                                        ))}
                                    </ul>
                                </div><br></br>

                                {/* Exercises */}
                                <div className="card-body text-light">
                                    <h5>Exercises:</h5>
                                    <ul style={{fontSize:'18px'}}>
                                        {workoutPlan.exercises.map((exercise) => (
                                            <li key={exercise.id}>
                                                <strong>{exercise.name}</strong> - Sets: {exercise.sets} & Repetitions: {exercise.repetitions}
                                            </li>
                                        ))}
                                    </ul>
                                </div></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkoutPlanPost;
