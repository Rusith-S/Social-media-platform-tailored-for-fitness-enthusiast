import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Card, Alert } from 'react-bootstrap';

const UploadForm = ({ onUploadSuccess, handleClose }) => {
    const [title, setTitle] = useState('');
    const [imageFiles, setImageFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Handle title change
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    // Handle image change
    const handleImageChange = (e) => {
        const files = e.target.files;

        // Check the number of files selected
        if (files.length > 3) {
            setErrorMessage('You can only upload up to 3 images.');
        } else {
            setErrorMessage('');
            setImageFiles(files);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prevent form submission if there is an error
        if (errorMessage) {
            return;
        }

        // Create a FormData object and append the title and images
        const formData = new FormData();
        formData.append('title', title);

        // Append each image file
        for (let i = 0; i < imageFiles.length; i++) {
            formData.append('images', imageFiles[i]);
        }

        try {
            // Send the POST request
            const response = await axios.post('http://localhost:8090/api/home', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Post created successfully:', response.data);

            // Reset the form after successful submission
            setTitle('');
            setImageFiles([]);
            setErrorMessage('');

            // Optional: Callback to handle success in the parent component
            if (typeof onUploadSuccess === 'function') {
                onUploadSuccess(response.data);
            }

            handleClose();
        } catch (error) {
            if (error.response) {
                console.error('Server responded with error status:', error.response.status);
                console.error('Error response data:', error.response.data);
            } else if (error.request) {
                console.error('No response received from server:', error.request);
            } else {
                console.error('Error setting up the request:', error.message);
            }
        }
    };

    return (
        <Card style={{ width: '100%', margin: 'auto', marginTop: '30px' }}>
            <Card.Body>
                <h2 className="text-center text-dark" style={{ fontWeight: 'bolder' }}>Create Post</h2>

                <Form onSubmit={handleSubmit}>
                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

                    <Form.Group controlId="formImages" className="mt-3">
                        <Form.Label>Images</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                            required
                        />
                    </Form.Group>

                    <br></br>

                    <Form.Group controlId="formTitle">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            value={title}
                            onChange={handleTitleChange}
                            required
                        />
                    </Form.Group>

                    <br></br><br></br>

                    <div className="row">
                        <div className="col-md-6">
                            <Button type="submit" variant="dark" className="w-100">Submit</Button>
                        </div>
                        <div className="col-md-6">
                            <Button
                                type="button"
                                variant="outline-dark"
                                className="w-100"
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default UploadForm;
