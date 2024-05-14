import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const PopupForm = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content card">
                <div className="card-header">
                    <button className="close-button btn btn-close float-end" onClick={onClose}>×</button>
                    <h4>Edit Workout Plan</h4>
                </div>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

const MyUpdate = () => {
    const [workoutPlans, setWorkoutPlans] = useState([]);
    const [error, setError] = useState(null);
    const [editingPlan, setEditingPlan] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        routines: [],
        exercises: [],
    });

    const fetchWorkoutPlans = async () => {
        try {
            const response = await fetch('http://localhost:8090/api/workoutplans');
            if (response.ok) {
                const data = await response.json();
                setWorkoutPlans(data);
            } else {
                throw new Error(`Failed to fetch workout plans: ${response.statusText}`);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchWorkoutPlans();
    }, []);

    const handleDelete = async (planId) => {
        try {
            const response = await fetch(`http://localhost:8090/api/workoutplans/${planId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                fetchWorkoutPlans(); // Refresh list after deletion
            } else {
                throw new Error(`Failed to delete workout plan: ${response.statusText}`);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const startEditing = (workoutPlan) => {
        setEditingPlan(workoutPlan);
        setFormData({
            title: workoutPlan.title,
            routines: workoutPlan.routines || [],
            exercises: workoutPlan.exercises || [],
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:8090/api/workoutplans/${editingPlan.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setEditingPlan(null);
                fetchWorkoutPlans();
            } else {
                throw new Error(`Failed to update workout plan: ${response.statusText}`);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    // Handle routine input changes
    const handleRoutineChange = (index, value) => {
        const updatedRoutines = [...formData.routines];
        updatedRoutines[index] = value;
        setFormData({ ...formData, routines: updatedRoutines });
    };

    // Handle exercise input changes
    const handleExerciseChange = (index, field, value) => {
        const updatedExercises = [...formData.exercises];
        updatedExercises[index] = {
            ...updatedExercises[index],
            [field]: value,
        };
        setFormData({ ...formData, exercises: updatedExercises });
    };

    // Add a new routine field
    const addRoutine = () => {
        setFormData({ ...formData, routines: [...formData.routines, ''] });
    };

    // Add a new exercise field
    const addExercise = () => {
        setFormData({ ...formData, exercises: [...formData.exercises, { name: '', sets: '', repetitions: '' }] });
    };

    // Remove a routine
    const removeRoutine = (index) => {
        const updatedRoutines = formData.routines.filter((_, i) => i !== index);
        setFormData({ ...formData, routines: updatedRoutines });
    };

    // Remove an exercise
    const removeExercise = (index) => {
        const updatedExercises = formData.exercises.filter((_, i) => i !== index);
        setFormData({ ...formData, exercises: updatedExercises });
    };

    const backgroundImageList = [
        'WeightLifting.jpg',
        'WorkoutStatusHome4.jpeg',
        'sasi.jpg',
        'WorkoutSlider4.jpg',
        // Add more URLs as needed
    ];
    return (
        <div className="workout-plan-post">
            {error && (
                <div className="alert alert-danger">
                    <p>Error: {error}</p>
                </div>
            )}
            <div className="row" style={{padding:'80px'}}>
                {workoutPlans.map((workoutPlan, index) => (
                    <div
                        key={workoutPlan.id}
                        className={`col-md-6 mb-4`} // Ensure cards take up half of the row's width
                       
                    >
                        <div className="card" style={
                            {backgroundImage: `url(${backgroundImageList[index % backgroundImageList.length]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        padding:"60px"}
                        }>
                            <div
                                className="card-body"
                                style={{
                                    marginRight: '20px',
                                    opacity: '0.8',
                                    backgroundColor:'black',
                                    padding: '80px',
                                }}
                            >
                                <h5 className="text-light" style={{ fontWeight: 'bolder' }}>
                                    <i className="fas fa-user"></i>&nbsp;&nbsp;{workoutPlan.title}
                                </h5>
                                <div className="row">
                                    {/* Routines */}
                                    <div className="card-body text-light">
                                        <h6>Routines:</h6>
                                        <ul>
                                            {workoutPlan.routines &&
                                                workoutPlan.routines.map((routine, index) => (
                                                    <li key={index}>{routine}</li>
                                                ))}
                                        </ul>
                                    </div>

                                    {/* Exercises */}
                                    <div className="card-body text-light">
                                        <h6>Exercises:</h6>
                                        <ul>
                                            {workoutPlan.exercises.map((exercise) => (
                                                <li key={exercise.id}>
                                                    <strong>{exercise.name}</strong> - Sets: {exercise.sets} & Repetitions: {exercise.repetitions}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Buttons for editing and deleting */}
                                <div className="button-group">
                                    <button
                                        onClick={() => startEditing(workoutPlan)}
                                        className="btn btn-primary me-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(workoutPlan.id)}
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup form */}
            <PopupForm isOpen={!!editingPlan} onClose={() => setEditingPlan(null)} >
                <form onSubmit={handleSubmit} className="form" >
                    <div className="form-group mb-3">
                        <label className="form-label">Title:</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="form-control"
                        />
                    </div>

                    <div className="form-group mb-3">
                        <h5>Routines:</h5>
                        <div className="row">
                            {formData.routines.map((routine, index) => (
                                <div key={index} className="col-md-4 mb-2">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            value={routine}
                                            onChange={(e) => handleRoutineChange(index, e.target.value)}
                                            className="form-control"
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-dark"
                                            onClick={() => removeRoutine(index)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button type="button" className="btn btn-dark w-100" onClick={addRoutine}>
                            Add Routine
                        </button>
                    </div>

                    <div className="form-group mb-3">
                        <h5>Exercises:</h5>
                        {formData.exercises.map((exercise, index) => (
                            <div key={index} className="row mb-3">
                                {/* Name input */}
                                <div className="col-md-3">
                                    <label className="form-label">Name:</label>
                                    <input
                                        type="text"
                                        value={exercise.name}
                                        onChange={(e) => handleExerciseChange(index, 'name', e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                                {/* Sets input */}
                                <div className="col-md-3">
                                    <label className="form-label">Sets:</label>
                                    <input
                                        type="number"
                                        value={exercise.sets}
                                        onChange={(e) => handleExerciseChange(index, 'sets', e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                                {/* Repetitions input */}
                                <div className="col-md-3">
                                    <label className="form-label">Repetitions:</label>
                                    <input
                                        type="number"
                                        value={exercise.repetitions}
                                        onChange={(e) => handleExerciseChange(index, 'repetitions', e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                                {/* Remove button */}
                                <div className="col-md-3 d-flex align-items-end justify-content-center">
                                    <button type="button" className="btn btn-outline-dark" onClick={() => removeExercise(index)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button type="button" className="btn btn-dark w-100" onClick={addExercise}>
                            Add Exercise
                        </button>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <button type="submit" className="btn btn-dark w-100">
                                Update
                            </button>
                        </div>
                        <div className="col-md-6">
                            <button
                                type="button"
                                className="btn btn-outline-dark w-100"
                                onClick={() => setEditingPlan(null)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </PopupForm>
        </div>
    );
};

export default MyUpdate;
