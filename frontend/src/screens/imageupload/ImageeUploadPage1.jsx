import React from 'react'
import HomeList from './ImageDisplay'
import Navbar from '../../componants/Navbar';
import ImageDisplay from './ImageDisplay';
import HealthyTipsList from './Tips';
export default function ImageeUploadPage1() {
  return (
    <div style={{backgroundColor:'black'}}>
       <Navbar></Navbar>
      <div id='savi_1' style={{backgroundImage: "url('111.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height:"900px"}}>
        <div id='savi_2' style={{padding:"50px",marginLeft:"850px",marginRight:'50px', textAlign: "right"}}>
          <p style={{fontSize:"30px",fontFamily:"fantasy", letterSpacing:"1px",color:"#CECECE" }}>Fuel your body, move your body</p>
          <p style={{fontSize:"70px",fontFamily:"fantasy", letterSpacing:"3px",color:"white" }}>Empower your day<br></br>with a workout that invigorates<br></br>both body and mind.<br></br>Set your intentions and<br></br>WORKOUT</p>
        </div>
      </div>

        <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center"}}>
        <div style={{width:'60%'}}>

            <ImageDisplay></ImageDisplay>
        </div>
        <div style={{width:'40%'}}>
          <h3 style={{marginTop:'50px',marginLeft:'50px'}}>HEALTHY TIPS FOR THE DAY!!!</h3>
            <HealthyTipsList></HealthyTipsList>
        </div>
        </div>
      
    </div>
  )
}
