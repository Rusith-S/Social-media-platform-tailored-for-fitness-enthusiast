import React from 'react'
import Navbar from '../componants/Navbar'

export default function Home() {
  return (
    <div style={{backgroundColor: 'black'}}>
       <Navbar />
       <div id='savi_1' style={{backgroundImage: "url('home22.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height:"1000px"}}>
        <div id='savi_2' style={{padding:"120px"}}>
          <p style={{fontSize:"30px",fontFamily:"fantasy", letterSpacing:"1PX",color:"#CECECE" }}>This is the best time for a change !!!</p>
        <p style={{fontSize:"70px",fontFamily:"fantasy", letterSpacing:"3PX",color:"white" }}>Let's begin<br></br>the ultimate journey of<br></br>your fitness style</p>
        <button type="button" class="btn btn-primary btn-lg">Get Started&nbsp; 
        <i class="bi bi-arrow-right"></i>
        </button>
        </div>
          </div>
    </div>
  )
}
