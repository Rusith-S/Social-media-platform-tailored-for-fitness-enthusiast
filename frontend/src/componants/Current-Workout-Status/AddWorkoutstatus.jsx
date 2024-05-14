import React, { useState, useEffect } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import Swal from "sweetalert2";
import "./addWorkoutstatus.scss";

const AddCurrentWorkoutStatus = ({ onClose }) => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    distance_Ran: "",
    no_of_Push_ups: "",
    no_of_Squats: "",
    no_of_Lunges: "",
    no_of_Planks: "",
    weight_Lifted: "",
    description: ""
  });

  const [existingWorkouts, setExistingWorkouts] = useState([]);

  useEffect(() => {
    // Fetch existing workout entries from the backend upon component mount
    fetchExistingWorkouts();
  }, []);

  const fetchExistingWorkouts = async () => {
    try {
      const response = await fetch("http://localhost:8060/api/currentWorkoutStatus");
      if (response.ok) {
        const data = await response.json();
        setExistingWorkouts(data); // Update existing workouts state with fetched data
      } else {
        console.error("Failed to fetch existing workouts");
      }
    } catch (error) {
      console.error("Error fetching existing workouts:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { date } = formData;

    // Check if a workout entry for the selected date already exists
    if (existingWorkouts.some(workout => workout.date === date)) {
      // If a workout for this date exists, show an error message
      Swal.fire({
        icon: "error",
        title: "Oops...Workout Status Already Added",
        text: "You have already added today's workout status. If you need to make changes, please update the existing record.",
        confirmButtonColor: "#d33",
        confirmButtonText: "OK"
      });
    } else {
      // If no existing workout for this date, proceed with saving the workout status
      try {
        const postResponse = await fetch("http://localhost:8060/api/currentWorkoutStatus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        if (postResponse.ok) {
          // Show success message upon successful submission
          Swal.fire({
            icon: "success",
            title: "Workout Status Added",
            text: "The workout status has been successfully recorded.",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK"
          });
          onClose(); // Close the modal
        } else {
          console.error("Failed to save workout status");
          // Show error message if failed to save the workout status
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to save the workout status. Please try again.",
            confirmButtonColor: "#d33",
            confirmButtonText: "OK"
          });
        }
      } catch (error) {
        console.error("Error saving workout status:", error);
        // Show error message for any unexpected error
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "An error occurred while saving the workout status. Please try again later.",
          confirmButtonColor: "#d33",
          confirmButtonText: "OK"
        });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="Russa_Add_Current_Workout_Status">
      <div className="Russa_modal-overlay">
        <div className="Russa_modal-content">
          <button className="Russa_close-modal-button" onClick={onClose}>
            <CancelIcon />
          </button>
          <h1 className="Russa_add_pr_shd_form-title">Add Today's Workouts Achievement</h1>
          <form onSubmit={handleSubmit}>
            <div className="user-input-box">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="marking-row">
              <div className="user-input-box">
                <label htmlFor="distance_Ran">Distance Ran</label>
                <input
                  type="number"
                  id="distance_Ran"
                  name="distance_Ran"
                  placeholder="Enter distance ran"
                  value={formData.distance_Ran}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="no_of_Push_ups">Push-ups</label>
                <input
                  type="number"
                  id="no_of_Push_ups"
                  name="no_of_Push_ups"
                  placeholder="Enter number of push-ups"
                  value={formData.no_of_Push_ups}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="marking-row">
              <div className="user-input-box">
                <label htmlFor="weight_Lifted">Weight Lifted (Kg)</label>
                <input
                  type="number"
                  id="weight_Lifted"
                  name="weight_Lifted"
                  placeholder="Enter weight lifted"
                  value={formData.weight_Lifted}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="no_of_Squats">Squats</label>
                <input
                  type="number"
                  id="no_of_Squats"
                  name="no_of_Squats"
                  placeholder="Enter number of Squats"
                  value={formData.no_of_Squats}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="marking-row">
              <div className="user-input-box">
                <label htmlFor="no_of_Lunges">Lunges</label>
                <input
                  type="number"
                  id="no_of_Lunges"
                  name="no_of_Lunges"
                  placeholder="Enter number of Lunges"
                  value={formData.no_of_Lunges}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="no_of_Planks">Planks (Seconds)</label>
                <input
                  type="number"
                  id="no_of_Planks"
                  name="no_of_Planks"
                  placeholder="Enter the number of seconds"
                  value={formData.no_of_Planks}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="user-input-box">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Enter workout description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-submit-btn">
              <input type="submit" value="Save Workout Record" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCurrentWorkoutStatus;
