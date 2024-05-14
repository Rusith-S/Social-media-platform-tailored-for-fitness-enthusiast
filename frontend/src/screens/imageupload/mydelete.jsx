import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel, Button } from 'react-bootstrap';

const ImageDisplay = () => {
    const [home, setHome] = useState([]);

    useEffect(() => {
        fetchHome();
    }, []);

    const fetchHome = async () => {
        try {
            const response = await axios.get('http://localhost:8090/api/home');
            setHome(response.data);
        } catch (error) {
            console.error('Error fetching Home:', error);
        }
    };

    // Function to delete a post by its ID
    const deletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:8090/api/home/${id}`);
            // Remove the deleted post from the state
            setHome((prevHome) => prevHome.filter((post) => post.id !== id));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    // Function to group the home data into pairs of two
    const groupDataInPairs = (data) => {
        const pairs = [];
        for (let i = 0; i < data.length; i += 2) {
            pairs.push(data.slice(i, i + 2));
        }
        return pairs;
    };

    // Group the home data into pairs
    const homePairs = groupDataInPairs(home);

    return (
        <div style={{ padding: '40px' }}>
            {/* Iterate over each pair of home data */}
            {homePairs.map((pair, index) => (
                <div
                    key={index}
                    style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}
                >
                    {/* Iterate over each home data in the pair */}
                    {pair.map((homeData) => (
                        <div
                            className="card"
                            style={{
                                padding: '20px',
                                backgroundColor: 'black',
                                width: '48%',
                                marginBottom: '40px',
                            }}
                            key={homeData.id}
                        >
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Carousel>
                                    {homeData.imageUrls.map((imageUrl, index) => (
                                        <Carousel.Item key={index}>
                                            <img
                                                className="d-block w-100"
                                                src={imageUrl}
                                                alt={`Image ${index}`}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                            <div className="card-body text-white" style={{ marginLeft: '20px' }}>
                                <h4>{homeData.title}</h4><br />
                                {/* Delete Button */}
                                <Button
                                    variant="danger"
                                    onClick={() => deletePost(homeData.id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ImageDisplay;
