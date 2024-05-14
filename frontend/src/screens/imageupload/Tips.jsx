import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const healthyTipsData = [
    {
        tip: 'Exercise regularly for a healthy lifestyle.',
        des:'Regular exercise improves physical fitness, boosts mood, aids weight management, and reduces chronic disease risk for a healthy, balanced lifestyle.',
        imageUrl: '2.jpg', // Replace with your image URL
    },
    {
        tip: 'Eat a balanced diet rich in fruits and vegetables.',
        des:' Eating a balanced diet rich in fruits and vegetables provides essential nutrients, boosts immunity, aids digestion, and promotes overall health.',
        imageUrl: '3.jpg', // Replace with your image URL
    },
    {
        tip: 'Drink plenty of water to stay hydrated.',
        des:'Drinking plenty of water helps maintain body functions, supports digestion, regulates temperature, and keeps skin healthy and hydrated.',
        imageUrl: '4.jpg', // Replace with your image URL
    },
    // Add more tips as needed
];

const HealthyTipCard = ({ tip,des, imageUrl }) => {
    return (
        <Card style={{ marginBottom: '40px',backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%',borderRadius:'20px' ,padding:'80px'}}>
           <Card.Body style={{backgroundColor:'black',padding:'50px',opacity:'0.7',borderRadius:'50px',marginRight:'200px'}}>
                <p style={{color:'white',fontWeight:'bolder',fontSize:'25px'}}>{tip}</p>
                <p style={{ color: 'white', fontSize: '20px' }}>{des}</p>
            </Card.Body>
        </Card>
    );
};

const HealthyTipsList = () => {
    return (
        <div style={{ padding: '40px' }}>
            {healthyTipsData.map((tipData, index) => (
                <HealthyTipCard key={index} tip={tipData.tip} des={tipData.des}  imageUrl={tipData.imageUrl} />
            ))}
        </div>
    );
};

export default HealthyTipsList;
