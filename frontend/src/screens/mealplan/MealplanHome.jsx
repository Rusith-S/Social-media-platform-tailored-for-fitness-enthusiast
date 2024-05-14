// import React from 'react'
// import Navbar from '../../componants/Navbar'

// export default function MealplanHome() {
//   return (
//     <div style={{backgroundColor: 'black'}}>
//        <Navbar />
//        <div id='savi_1' style={{backgroundImage: "url('meal2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height:"900px"}}>
//         <div id='savi_2' style={{padding:"120px"}}>
//           <p style={{fontSize:"30px",fontFamily:"fantasy", letterSpacing:"1PX",color:"#CECECE" }}>Eat BETTER not LESS !!!</p>
//         <p style={{fontSize:"70px",fontFamily:"fantasy", letterSpacing:"3PX",color:"white" }}>Proper nutrition is the<br></br>defference between<br></br>feeling exhausted and getting<br></br>the most out of a<br></br>WORKOUT</p>
        
//         </div>
//           </div>
//           <div>     
                
//           </div>
//     </div>
//   )
// }

import React, { useState } from 'react';
import Navbar from '../../componants/Navbar';
import './MealplanHome.css'
import Page1 from './Page1';
import Page2 from './Page2';
import RecipeList from './RecipeList';
export default function MealplanHome() {
  const [activeTab, setActiveTab] = useState('mealPlans');

  return (
    <div style={{backgroundColor: 'black'}}>
     <Navbar></Navbar>
      <div id='savi_1' style={{backgroundImage: "url('meal2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height:"900px"}}>
        <div id='savi_2' style={{padding:"120px"}}>
          <p style={{fontSize:"30px",fontFamily:"fantasy", letterSpacing:"1px",color:"#CECECE" }}>Eat BETTER not LESS !!!</p>
          <p style={{fontSize:"70px",fontFamily:"fantasy", letterSpacing:"3px",color:"white" }}>Proper nutrition is the<br></br>difference between<br></br>feeling exhausted and getting<br></br>the most out of a<br></br>WORKOUT</p>
        </div>
      </div>

<div >
        <ul className="nav nav-pills nav-justified" style={{ marginTop: '20px' }}>
          <li className="nav-item text-white">
            <button
              className={`nav-link ${activeTab === 'mealPlans' ? 'active' : ''}`}
              onClick={() => setActiveTab('mealPlans')}
              style={{fontSize:'25px'}}
            >
              Meal Plans
            </button>
          </li>
          <li className="nav-item text-white">
            <button
              className={`nav-link ${activeTab === 'recipes' ? 'active' : ''}`} 
              onClick={() => setActiveTab('recipes')}
              style={{fontSize:'25px'}}
            >
              Recipes
            </button>
          </li>
        </ul>
        {activeTab === 'mealPlans' && (
          <div style={{ padding: '40px', color: '#CECECE' }}>
           <Page1></Page1>
          </div>
        )}
        {activeTab === 'recipes' && (
          <div style={{ marginTop: '20px', color: '#CECECE' }}>
            <RecipeList></RecipeList>
          </div>
        )}
      </div>

    </div>
  );
}
