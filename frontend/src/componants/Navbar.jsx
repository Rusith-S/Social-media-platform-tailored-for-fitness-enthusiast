//old nav bar without dropdown menu

// import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.css';

// export default function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg text-white" style={{ padding: '20px' }}>
//         <a className="navbar-brand text-white" href="#" style={{ marginRight: '10%', marginLeft: '2%', fontSize: "22px" }}>FITNESS</a>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ">
//             <li className="nav-item active">
//               <a className="nav-link text-white" href="http://localhost:3000/" style={{ marginRight: '50px' }}>Home <span className="sr-only"></span></a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="http://localhost:3000/workoutplan" style={{ marginRight: '50px' }}>Workout Plans</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="http://localhost:3000/workoutStatus" style={{ marginRight: '50px' }}>Current Workouts</a>
//             </li>
            
//             <li className="nav-item">
//               <a className="nav-link text-white" href="http://localhost:3000/mealplan">Meal Plans </a>
//             </li>
//           </ul>
//           {/* User Profile Icon */}
//           <ul className="navbar-nav ml-auto" style={{ marginLeft: '750px' }}>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#"> 
//                 <i class="fas fa-user"></i>&nbsp; My Account
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }



//new navbar after  drop down added to workout status


import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import './navbar.scss'

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" variant="dark" className="text-white" style={{ padding: '20px' }}>
      <Navbar.Brand href="#" style={{ marginRight: '120px', marginLeft: '2%', fontSize: "22px" }}>
        FITNESS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="mr-auto">
          <Nav.Link href="http://localhost:3000/" className="text-white" style={{ marginRight: '50px' }}>
            Home
          </Nav.Link>
          <Nav.Link href="http://localhost:3000/home" className="text-white" style={{ marginRight: '50px' }}>
            Feed
          </Nav.Link>
          <Nav.Link href="http://localhost:3000/workoutplan" className="text-white" style={{ marginRight: '50px'}}>
            Workout Plans
          </Nav.Link>
          <NavDropdown title="Workouts Status" id="navbarDropdown" className="custom-dropdown" style={{ marginRight: '50px'}} >
            <NavDropdown.Item href="http://localhost:3000/workoutStatus" className="text-white">
              Current Workout Status
            </NavDropdown.Item>
            <NavDropdown.Item href="http://localhost:3000/PreviousWorkouts" className="text-white">
              Previous Workouts
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="http://localhost:3000/mealplan" className="text-white">
            Meal Plans
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto" style={{ marginLeft: '750px' }}>
          <Nav.Link href="http://localhost:3000/account" className="text-white">
            <i className="fas fa-user"></i>&nbsp; My Account
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}










