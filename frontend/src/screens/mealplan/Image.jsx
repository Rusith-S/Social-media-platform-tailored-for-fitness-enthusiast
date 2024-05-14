import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'; // Assuming you want to use axios for API calls
import 'bootstrap/dist/css/bootstrap.min.css';

function ImageDisplay() {
  // State to store the list of images
  const [imageList, setImageList] = useState([]);

  // Fetching data from the server when the component mounts
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:8090/api/r/get'); // Adjust the API URL as needed
      setImageList(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    
      <div>
        {/* Main Content */}
        <div className="mt-5">
          <h1 className="text-center">View Images</h1>
          <div className="container">
            {/* Add Image Button */}
            <div className="my-3">
              <Link to="/add">
                <button type="button" className="btn btn-primary">Add Image</button>
              </Link>
            </div>

            {/* Table to display images */}
            <table className="table border">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Image</th>
                  <th scope="col">Created AT</th>
                </tr>
              </thead>
              <tbody>
                {imageList.map((image) => (
                  <tr key={image.id}>
                    <td>{image.id}</td>
                    <td>
                      <img
                        height="250px"
                        src={`/display?id=${image.id}`} // Adjust the image source as needed
                        alt=""
                      />
                    </td>
                    <td>{image.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
  
  );
}

export default ImageDisplay;
