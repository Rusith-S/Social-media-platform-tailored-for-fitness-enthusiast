import React, { useState } from 'react';
import { Form, Button, Container, Alert, Row, Col, Card } from 'react-bootstrap';

const WorkoutPlanForm = ({ onClose }) => {
    const [title, setTitle] = useState('');
    const [routines, setRoutines] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const workoutPlanDTO = {
            title,
            routines,
            exercises,
        };

        console.log('Submitted workout plan data:', workoutPlanDTO);

        try {
            const response = await fetch('http://localhost:8090/api/workoutplans', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(workoutPlanDTO),
            });

            if (response.ok) {
                const data = await response.json();
                setResponseMessage(`Workout plan created successfully! ID: ${data.id}`);
            } else {
                setResponseMessage(`Error creating workout plan: ${response.statusText}`);
            }
        } catch (error) {
            setResponseMessage(`Error creating workout plan: ${error.message}`);
        }
    };

    const handleAddRoutine = () => {
        setRoutines([...routines, '']);
    };

    const handleRoutineChange = (index, value) => {
        const newRoutines = [...routines];
        newRoutines[index] = value;
        setRoutines(newRoutines);
    };

    const handleAddExercise = () => {
        setExercises([...exercises, { name: '', sets: '', repetitions: '' }]);
    };

    const handleExerciseChange = (index, field, value) => {
        const newExercises = [...exercises];
        newExercises[index][field] = value;
        setExercises(newExercises);
    };

    return (
        <Container className="mt-4">
            <Card style={{backgroundImage:"url('ww1.jpg')",backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%'}}>
               
                    
                
                <Card.Body>
                    
                    <Form onSubmit={handleSubmit} >
                    
                    <h2 className="text-center text-dark" style={{fontWeight:'bolder'}}>Create your personalized Workout Plan</h2><br></br>
                
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title :</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter workout plan title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </Form.Group>
<br></br>
                        <Form.Label>Routines :</Form.Label>
                        {routines.map((routine, index) => (
                            <Form.Group key={index} controlId={`formRoutine${index}`}>
                                <Form.Label>Routine {index + 1}</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter routine"
                                    value={routine}
                                    onChange={(e) => handleRoutineChange(index, e.target.value)}
                                    required
                                />
                            </Form.Group>
                        ))}<br></br>
                        <button  onClick={handleAddRoutine} className="btn btn-outline-dark w-100">
                            Add Routine
                        </button>
                       
                       <br></br><br></br>
                        <Form.Label>Exercises :</Form.Label>
                        
                        {exercises.map((exercise, index) => (
                            <Row key={index} className="mb-2">
                                <Col>
                                    <Form.Group controlId={`formExerciseName${index}`}>
                                        <Form.Label>Exercise Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter exercise name"
                                            value={exercise.name}
                                            onChange={(e) => handleExerciseChange(index, 'name', e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId={`formExerciseSets${index}`}>
                                        <Form.Label>Sets</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter sets"
                                            value={exercise.sets}
                                            onChange={(e) => handleExerciseChange(index, 'sets', e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId={`formExerciseRepetitions${index}`}>
                                        <Form.Label>Repetitions</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter repetitions"
                                            value={exercise.repetitions}
                                            onChange={(e) => handleExerciseChange(index, 'repetitions', e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        ))}
                        <br></br>

                        <button  onClick={handleAddExercise} className="btn btn-outline-dark w-100">
                            Add Exercise
                        </button>

                        <br></br><br></br><br></br>
                        <div class="row">
            <div class="col-md-6">
                <button type="submit" className="btn btn-dark w-100">Create Workout Plan</button>
            </div>
            <div class="col-md-6">
                <button type="button" className="btn btn-outline-dark w-100" onClick={onClose}>Cancel</button>
            </div>
        </div>
                    </Form>

                    {responseMessage && (
                        <Alert variant="info" className="mt-4">
                            {responseMessage}
                        </Alert>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default WorkoutPlanForm;
