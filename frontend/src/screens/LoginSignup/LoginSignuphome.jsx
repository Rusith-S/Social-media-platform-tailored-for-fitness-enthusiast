import React from 'react'
import Navbar from '../../componants/Navbar'
import LoginSignup from '../../componants/LoginSignup/LoginSignup'

export default function Home() {
  return (
    <div style={{backgroundColor: 'black'}}>
       <Navbar />
       <div id='savi_1' style={{backgroundImage: "url('home22.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height:"1000px"}}>
        <div id='savi_2' style={{padding:"120px"}}>
          <p style={{fontSize:"30px",fontFamily:"fantasy", letterSpacing:"1PX",color:"#CECECE" }}>This is the best time for a change !!!</p>
        
         
        <i class="bi bi-arrow-right"></i>
        
       <LoginSignup/>
        </div>
          </div>
    </div>
  )
}