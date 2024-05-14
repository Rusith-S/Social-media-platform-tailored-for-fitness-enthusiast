import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // Assuming you want to use axios for API calls

function AddImage() {
    // State to handle the selected file
    const [selectedFile, setSelectedFile] = useState(null);

    // Function to handle file change event
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);
            try {
                // Make the API call to upload the image
                const response = await axios.post('http://localhost:8090/api/r/add', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Image uploaded successfully:', response.data);
                // Add any further actions after successful upload
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    return (
        <div>
            
            {/* Main Content */}
            <div className="my-5">
                <div className="mx-auto w-25" style={{ maxWidth: '100%' }}>
                    <h2 className="text-center mb-3">Add Image</h2>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="input-group">
                            <input
                                type="file"
                                className="form-control"
                                id="image"
                                name="image"
                                aria-describedby="inputGroupFileAddon04"
                                aria-label="Upload"
                                required
                                onChange={handleFileChange}
                            />
                            <button className="btn btn-outline-secondary" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddImage;
