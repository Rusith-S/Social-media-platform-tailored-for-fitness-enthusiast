import { useState } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './componants/Navbar'
import Home from './screens/Home'
import MealplanHome from './screens/mealplan/MealplanHome';
import WorkoutplanHome from './screens/workoutplan/WorkoutPlanHome';

import RecipeForm from './screens/mealplan/RecipeForm';
import AddImage from './screens/mealplan/AddImage';
import ImageDisplay from './screens/mealplan/Image';
import RecipeForm2 from './screens/mealplan/RecipeForm';
import Recipe from './screens/mealplan/Recipe';
import RecipeList from './screens/mealplan/RecipeList';

import LoginSignHome from './screens/LoginSignup/LoginSignuphome';
import WorkoutStatusHome from './screens/workoutstatus/workoutstatusHome';
import WorkoutPlanPost from './componants/WorkoutPlanPost'
import Mymealplans from './screens/mealplan/Mymealplans';

import CurrentWorkoutStatusview from './componants/Current-Workout-Status/currentworkoutstatusviewcomp'
import MyUpdate from './screens/workoutplan/MyUpdate';
import Deleterecipe from './screens/mealplan/Deleterecipe';
import ImageeUploadPage1 from './screens/imageupload/ImageeUploadPage1';
import Mydelete from './screens/imageupload/mydelete';
import UploadForm from './screens/imageupload/UploadForm';
import MyAccount from './screens/MyAccount';




function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/form' element={<UploadForm></UploadForm>}></Route>
      <Route path='/supun' element={<Mydelete></Mydelete>}></Route>
      <Route path='/home' element={<ImageeUploadPage1></ImageeUploadPage1>}></Route>
      <Route path='/mealplan' element={<MealplanHome></MealplanHome>}></Route>
      <Route path='/workoutplan' element={<WorkoutplanHome></WorkoutplanHome>}></Route>
      <Route path='/my' element={<Mymealplans></Mymealplans>}></Route>
      <Route path='/rf' element={<RecipeForm></RecipeForm>}></Route>
      <Route path='/add' element={<AddImage></AddImage>}></Route>
      <Route path='/i' element={<ImageDisplay></ImageDisplay>}></Route>
      <Route path='/recipe' element={<Recipe></Recipe>}></Route>
      <Route path='/recipelist' element={<RecipeList></RecipeList>}></Route>
      <Route path='/plans' element={<WorkoutPlanPost></WorkoutPlanPost>}></Route>
      <Route path='/LoginSignHome' element={<LoginSignHome></LoginSignHome>}></Route>
      <Route path='/myw' element={<MyUpdate></MyUpdate>}></Route>
      <Route path='/myrec' element={<Deleterecipe></Deleterecipe>}></Route>
      <Route path='/account' element={<MyAccount></MyAccount>}></Route>

      {/* Rusith */}
      <Route path='/workoutStatus' element={<WorkoutStatusHome></WorkoutStatusHome>}></Route>
      <Route path='/PreviousWorkouts' element={<CurrentWorkoutStatusview></CurrentWorkoutStatusview>}></Route>
    </Routes>
    </BrowserRouter>

   
    </>
  )
}

export default App
