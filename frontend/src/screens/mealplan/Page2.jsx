import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page2() {
  return (
    <>
      <div style={{ backgroundColor: "black", padding: "40px" }}>

      <div>
      <div class="card" style={{backgroundImage: "url('recipie1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%',borderTopRightRadius: '100px', borderBottomRightRadius: '100px',borderTopLeftRadius: '0px', borderBottomLeftRadius: '100px', display: "flex", flexDirection: "row"}}>
        <div class="card-body">
        <div style={{padding:'20px',}}>
          <h3>Looking a place for share your favourite healthy recipies ?</h3>
          <p style={{fontSize:'18px'}}>There you go!!! share you healthy meal tips with the world !!!<br></br>Unleash your passion for healthy eating and share your top meal tips with the world! Whether it's simple ingredient swaps, <br></br>creative recipes, or smart portion control, your insights can inspire others to embrace nutritious habits.<br></br> Let's build a community that prioritizes balanced, wholesome meals for a vibrant and healthy lifestyle!</p>
          
          <br></br>
          <button type="button" class="btn btn-primary btn-lg btn-block">Click here to share your recipies</button>
       <br></br>
       </div>
          </div>
      </div>
    </div>
<br></br>

        <div className="card" style={{ width: "100%", display: "flex", flexDirection: "row" ,backgroundColor:'black'}}>
          <div style={{ width: "100%" }}>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src="m2.jpg" alt="Meal 1" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="m1.jpg" alt="Meal 2" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="m3.jpg" alt="Meal 3" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="card-body text-white" style={{marginLeft:"20px"}}>
            <h3>Rice with chicken and vegetables</h3><br></br>
            <h5>Ingredients</h5>
            <p >1 cup of white rice ,2 boneless skinless chicken breasts, cut into small strips or cubes, 2 carrots peeled and sliced,2 cups of broccoli florets, soy sauce, teriyaki sauce </p>
            <h5>Instructions</h5>
            <p >Cook the White Rice:
Rinse the rice under cold water until the water runs clear.In a pot, bring 2 cups of water and a pinch of salt to a boil.Add the rinsed rice to the pot, stir, and cover.
Reduce the heat to low and cook the rice for about 18-20 minutes or until all the water is absorbed.
Remove from heat and let it sit, covered, for 5 minutes before fluffing with a fork.</p>
<p>Cook the Chicken:
In a skillet, heat the olive oil over medium-high heat.Season the chicken strips or cubes with salt, pepper, and any optional seasonings you prefer.Add the chicken to the skillet and cook until golden brown and cooked through, about 5-7 minutes.
Remove the chicken from the skillet and set aside.</p>
<p>Cook the Vegetables:
In the same skillet, add the sliced carrots and cook for about 3-4 minutes.
Add the broccoli florets and cook for another 3-4 minutes or until the vegetables are tender but still crisp.</p>

          </div>
        </div>


        <div className="card" style={{ width: "100%", display: "flex", flexDirection: "row" ,backgroundColor:'black'}}>
          <div style={{ width: "100%" }}>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src="mm1.jpg" alt="Meal 1" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="mm2.jpg" alt="Meal 2" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="mm3.jpg" alt="Meal 3" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="card-body text-white" style={{marginLeft:"20px"}}>
            <h3>Dumpling</h3><br></br>
            <h5>Ingredients</h5>
            <p >1 cup of white rice ,2 boneless, skinless chicken breasts, cut into small strips or cubes, 2 carrots, peeled and sliced,2 cups of broccoli florets, soy sauce, teriyaki sauce </p>
            <h5>Instructions</h5>
            <p >Cook the White Rice:
Rinse the rice under cold water until the water runs clear.
In a pot, bring 2 cups of water and a pinch of salt to a boil.
Add the rinsed rice to the pot, stir, and cover.
Reduce the heat to low and cook the rice for about 18-20 minutes or until all the water is absorbed.
Remove from heat and let it sit, covered, for 5 minutes before fluffing with a fork.</p>
<p>Cook the Chicken:
In a skillet, heat the olive oil over medium-high heat.
Season the chicken strips or cubes with salt, pepper, and any optional seasonings you prefer.
Add the chicken </p>
          </div>
        </div>
      </div>
    </>
  );
}
