import React from 'react'
import Mydelete from '../screens/imageupload/mydelete';
import MyUpdate from '../screens/workoutplan/MyUpdate'
import Mymealplans from './mealplan/Mymealplans';
import Deleterecipe from './mealplan/Deleterecipe';
import Navbar from '../componants/Navbar';
export default function MyAccount() {
  return (
    <div>
        <Navbar />
    <div style={{padding:"70px"}}>
      <h2>WELCOME TO YOUR PROFILE</h2>
      <br></br>
      <div>
      <div>
      <h3>Your shared posts</h3>
      <Mydelete></Mydelete>
      </div>
      <div>
      <h3>Your workout plans</h3>
      <MyUpdate></MyUpdate>
      </div>
      <div>
      <h3>Your meal plans</h3>
      <Mymealplans></Mymealplans>
      </div>
      <div>
      <h3>Your recipes</h3>
      <Deleterecipe></Deleterecipe>
      </div>
    </div>
    </div>
    </div>
  )
}

