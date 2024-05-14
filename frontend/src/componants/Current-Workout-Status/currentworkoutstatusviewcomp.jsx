import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swal from "sweetalert2";
import UpdateWorkoutStatus from "./UpdateWorkoutStatus"; 
import Navbar from '../../componants/Navbar';
import "./currentworkoutstatusviewcomp.scss";

const CurrentWorkoutStatusview = () => {
  const [workoutData, setWorkoutData] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);

  useEffect(() => {
    const fetchWorkoutData = async () => {
      try {
        const response = await fetch("http://localhost:8060/api/currentWorkoutStatus");
        if (response.ok) {
          const data = await response.json();
          const sortedWorkouts = data.sort((a, b) => new Date(b.date) - new Date(a.date));
          setWorkoutData(sortedWorkouts);
        } else {
          throw new Error("Failed to fetch workout data");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to fetch workout data!",
          footer: `Error: ${error}`,
        });
      }
    };

    fetchWorkoutData();
  }, [showUpdateModal]); // Reload data when showUpdateModal changes

  const handleDelete = (workoutId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8060/api/currentWorkoutStatus/${workoutId}`, {
          method: "DELETE",
        })
          .then(() => {
            setWorkoutData(workoutData.filter((workout) => workout.id !== workoutId));
            Swal.fire("Deleted!", "Your workout has been deleted.", "success");
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Failed to delete workout!",
              footer: `Error: ${error}`,
            });
          });
      }
    });
  };

  const handleUpdateClick = (workoutId) => {
    setSelectedWorkoutId(workoutId);
    setShowUpdateModal(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const suffix = getDaySuffix(day);
    return (
      <span>
        {day}
        <sup>{suffix}</sup> of {month} {year}
      </span>
    );
  };

  const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Russa_currentworkoutstatus_view" >
      <div style={{ backgroundColor: 'black' }}>
      <Navbar/>
      </div>
      <div className="container">
        <h2 className="text-center mt-4 mb-4" style={{ color: "#b3cde0" }}>
          Your Previous Workout History
        </h2>
        <div className="row">
          {workoutData.map((workout) => (
            <div className="col-md-4 mb-4" key={workout.id}>
              <div className="workout-card">
                <div className="card-date">
                  <span className="date">{formatDate(workout.date)}</span>
                </div>
                <div className="workout-slider-container">
                  <Slider {...sliderSettings} className="workout-slider">
                  <div className="slider-image">
                        <img
                            src= "WorkoutSlider5.jpg"
                            alt="Workout"
                            className="slider-image"
                        /> 
                      </div>
                      <div className="slider-image">
                        <img
                            src= "WorkoutSlider1.jpg"
                            alt="Workout"
                            className="slider-image"
                        />
                      </div>
                      <div className="slider-image">
                        <img
                            src= "WorkoutSlider2.jpg"
                            alt="Workout"
                            className="slider-image"
                        />
                      </div>
                      <div className="slider-image">
                        <img
                            src= "WorkoutSlider3.jpg"
                            alt="Workout"
                            className="slider-image"
                        />
                      </div>
                      <div className="slider-image">
                        <img
                            src= "WorkoutSlider4.jpg"
                            alt="Workout"
                            className="slider-image"
                        />
                      </div>
                      <div className="slider-image">
                        <img
                            src= "WorkoutSlider7.jpg"
                            alt="Workout"
                            className="slider-image"
                        />
                      </div>
                      <div className="slider-image">
                        <img
                            src= "WorkoutSlider8.jpg"
                            alt="Workout"
                            className="slider-image"
                        />
                      </div>
                      <div className="slider-image">
                        <img
                            src= "WorkoutSlider9.jpg"
                            alt="Workout"
                            className="slider-image"
                        />
                      </div>
                      <div className="slider-image">
                        <img
                            src= "WorkoutSlider10.jpg"
                            alt="Workout"
                            className="slider-image"
                        />
                      </div>
                      <div className="slider-image">
                        <img
                            src= "WorkoutSlider11.jpg"
                            alt="Workout"
                            className="slider-image"
                        />
                      </div>
                      <div className="slider-image">
                        <img
                            src= "WorkoutStatusHome4.jpeg"
                            alt="Workout"
                            className="slider-image"
                        />
                      </div>
                  </Slider>
                </div>
                <div className="card-body">
                  <hr className="divider" />
                  <h5 className="card-title">Workout Details</h5>
                  <div className="workout-details">
                    <p>
                      <strong>Distance Ran:</strong> {workout.distance_Ran} km
                    </p>
                    <p>
                      <strong>Push-ups:</strong> {workout.no_of_Push_ups}
                    </p>
                    <p>
                      <strong>Lunges:</strong> {workout.no_of_Lunges}
                    </p>
                    <p>
                      <strong>Squats:</strong> {workout.no_of_Squats}
                    </p>
                    <p>
                      <strong>Planks:</strong> {workout.no_of_Planks} seconds
                    </p>
                    <p>
                      <strong>Weight Lifted:</strong> {workout.weight_Lifted} kg
                    </p>
                    <hr className="divider" />
                    <h5 className="card-title">Description</h5>
                    <p>{workout.description}</p>
                    <hr className="divider" />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <button className="btn" onClick={() => handleUpdateClick(workout.id)}>
                        Update
                      </button>
                      <button className="delete-btn" onClick={() => handleDelete(workout.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Render UpdateWorkoutStatus modal */}
      {showUpdateModal && (
        <UpdateWorkoutStatus
          onClose={() => setShowUpdateModal(false)}
          workoutId={selectedWorkoutId}
          onSuccess={() => setShowUpdateModal(false)} // Reload data upon success
        />
      )}
    </div>

  );
};

export default CurrentWorkoutStatusview;








