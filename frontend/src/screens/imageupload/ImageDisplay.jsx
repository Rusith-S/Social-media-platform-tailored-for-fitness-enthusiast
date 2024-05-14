import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import UploadForm from './UploadForm';

const ImageDisplay=() =>{
    const [home, setHome] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    useEffect(() => {
        fetchHome();
    }, []);

    const fetchHome = async () => {
        try {
            const response = await axios.get('http://localhost:8090/api/home');
            setHome(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching Home:', error);
            setLoading(false);
        }
    };
  return (
    <div style={{padding:'40px'}}>

                    

                              
<div >
            <div className="card" style={{
                backgroundImage: "url('boxing.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                borderTopRightRadius: '100px',
                borderBottomRightRadius: '100px',
                borderTopLeftRadius: '0px',
                borderBottomLeftRadius: '100px',
                display: "flex",
                flexDirection: "row"
            }}>
                <div className="card-body text-white ">
                    <div style={{ padding: '20px',marginLeft:'450px'}}>
                        <h3>Need a place for share your lifestyle achivements</h3>
                        <p style={{ fontSize: '18px' }}>I'm trying something new today: a dance cardio class! 💃 Sharing my fitness adventure with you all—what's your workout plan? Planning to unwind with some yoga this evening. 🧘‍♂️ How do you balance your fitness routine and self-care? </p>
                        <h2>A long run at the park and some resistance training. Let me know how you’re staying active today! </h2>
                        <br />
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={openForm}>Click here to share your achivements</button>
                        {isFormOpen && (
                            <div className="popup-overlay" onClick={closeForm}>
                                <div  onClick={(e) => e.stopPropagation()}>
                                    <UploadForm show={isFormOpen} handleClose={closeForm} />
                                </div>
                            </div>
                        )}
                        <br />
                    </div>
                </div>
            </div>
        </div>
        <br></br><br></br>
<div style={{padding:'40px'}}>
      {home.map(home => (
                        <div className="card" style={{padding:'40px',backgroundColor:'#1a1818',width: "100%",
                        marginBottom: '40px'}} key={home.id}>
                            <p className="card-body text-white"><i className="fas fa-user"></i>&nbsp; &nbsp;Supun Imesh</p>
                            <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <Carousel>
                                    {home.imageUrls.map((imageUrl, index) => (
                                        <Carousel.Item key={index}>
                                            <img className="d-block w-100" src={imageUrl} alt={`Image ${index}`} />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                            <div className="card-body text-white" style={{marginLeft:"20px"}}>
                                <p style={{fontSize:'20px'}}>{home.title}</p><br></br>
                               
                            </div>
                        </div>
                    ))}</div>
    </div>
  )
}
export default ImageDisplay;
