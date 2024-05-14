import React from 'react'

export default function ex() {
  return (
    <div>
                  
<div >
            <div className="card" style={{
                backgroundImage: "url('food.jpg')",
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
                <div className="card-body">
                    <div style={{ padding: '20px', marginLeft: '700px' }}>
                        <h3>Need a place for create your own meal plans and share it with everyone?</h3>
                        <p style={{ fontSize: '18px' }}>Discover the power of personalized meal planning tailored to your specific dietary preferences and nutritional needs. Take control of your health and wellness by creating your own customized meal plans, then share your creations with your friends and family to inspire positive changes and foster healthier habits in your daily routines. Together, you can make a meaningful difference in your lives by prioritizing balanced, nutritious meals.</p>
                        <h2>Plan your healthy meals for today and everyday!!!</h2>
                        <br />
                        <button type="button" className="btn btn-primary btn-lg btn-block"nClick={openForm}>Click here to create your own meal plan</button>
                        
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
