// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import CancelIcon from "@mui/icons-material/Cancel";
// import "./updateWorkoutstatus.scss";

// const UpdateWorkoutStatus = ({ onClose, workoutId }) => {
//   const [values, setValues] = useState({
//     date: new Date().toISOString().split("T")[0],
//     distance_Ran: "",
//     no_of_Push_ups: "",
//     no_of_Squats: "",
//     no_of_Lunges: "",
//     no_of_Planks: "",
//     weight_Lifted: "",
//     description: ""
//   });

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8060/api/currentWorkoutStatus/${workoutId}`)
//       .then((res) => {
//         const { date, distance_Ran, no_of_Push_ups, no_of_Squats, no_of_Lunges, no_of_Planks, weight_Lifted, description } = res.data;
//         setValues({
//           date,
//           distance_Ran,
//           no_of_Push_ups,
//           no_of_Squats,
//           no_of_Lunges,
//           no_of_Planks,
//           weight_Lifted,
//           description
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "Failed to fetch workout details!",
//           footer: `Error: ${err}`,
//         });
//       });
//   }, [workoutId]);

//   const handleUpdate = (e) => {
//     e.preventDefault();

//     axios
//       .put(`http://localhost:8060/api/currentWorkoutStatus/${workoutId}`, values)
//       .then((res) => {
//         console.log(res);
//         Swal.fire(
//           "Done!",
//           "Workout Details Updated Successfully!",
//           "success"
//         );
//         onClose(); // Close the modal after successful update
//       })
//       .catch((err) => {
//         console.log(err);
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "Failed to update workout details!",
//           footer: `Error: ${err}`,
//         });
//       });
//   };

//   return (
//     <div className="Russa_Update_Current_Workout_Status">
//           <div className="Russa_modal-overlay">
//             <div className="Russa_modal-content">
//               <button className="Russa_close-modal-button" onClick={onClose}>
//                 <CancelIcon />
//               </button>
//               <h1 className="Russa_add_pr_shd_form-title">Add Today's Workouts Achievement</h1>
//               <form onSubmit={handleUpdate}>
                // <div className="user-input-box">
                //   <label htmlFor="date">Date</label>
                //   <input
                //     type="date"
                //     id="date"
                //     name="date"
                //     value={values.date}
                //     readOnly // Make the input field read-only
                //   />
                // </div>
                // <div className="marking-row">
                //   <div className="user-input-box">
                //     <label htmlFor="distance_Ran">Distance Ran</label>
                //     <input
                //       type="number"
                //       id="distance_Ran"
                //       name="distance_Ran"
                //       placeholder="Enter distance ran"
                //       value={values.distance_Ran}
                //       onChange={(e) =>
                //         setValues({ ...values, distance_Ran: e.target.value })
                //       }
                //       required
                //     />
                //   </div>
                //   <div className="user-input-box">
                //     <label htmlFor="no_of_Push_ups">Push-ups</label>
                //     <input
                //       type="number"
                //       id="no_of_Push_ups"
                //       name="no_of_Push_ups"
                //       placeholder="Enter number of push-ups"
                //       value={values.no_of_Push_ups}
                //       onChange={(e) =>
                //         setValues({ ...values, no_of_Push_ups: e.target.value })
                //       }
                //       required
                //     />
                //   </div>
                // </div>
                // <div className="marking-row">
                //   <div className="user-input-box">
                //     <label htmlFor="weight_Lifted">Weight Lifted(.Kg)</label>
                //     <input
                //       type="number"
                //       id="weight_Lifted"
                //       name="weight_Lifted"
                //       placeholder="Enter weight lifted"
                //       value={values.weight_Lifted}
                //       onChange={(e) =>
                //         setValues({ ...values, weight_Lifted: e.target.value })
                //       }
                //       required
                //     />
                //   </div>
                //   <div className="user-input-box">
                //     <label htmlFor="no_of_Squats">Squats</label>
                //     <input
                //       type="number"
                //       id="no_of_Squats"
                //       name="no_of_Squats"
                //       placeholder="Enter number of Squats"
                //       value={values.no_of_Squats}
                //       onChange={(e) =>
                //         setValues({ ...values, no_of_Squats: e.target.value })
                //       }
                //       required
                //     />
                //   </div>
                // </div>
                // <div className="marking-row">
                //   <div className="user-input-box">
                //     <label htmlFor="no_of_Lunges">Lunges</label>
                //     <input
                //       type="number"
                //       id="no_of_Lunges"
                //       name="no_of_Lunges"
                //       placeholder="Enter number of Lunges"
                //       value={values.no_of_Lunges}
                //       onChange={(e) =>
                //         setValues({ ...values, no_of_Lunges: e.target.value })
                //       }
                //       required
                //     />
                //   </div>
                //   <div className="user-input-box">
                //     <label htmlFor="no_of_Planks">Planks(Seconds)</label>
                //     <input
                //       type="number"
                //       id="no_of_Planks"
                //       name="no_of_Planks"
                //       placeholder="Enter the number of seconds"
                //       value={values.no_of_Planks}
                //       onChange={(e) =>
                //         setValues({ ...values, no_of_Planks: e.target.value })
                //       }
                //       required
                //     />
                //   </div>
                // </div>
                // <div className="user-input-box">
                //   <label htmlFor="description">Description</label>
                //   <textarea
                //     id="description"
                //     name="description"
                //     placeholder="Enter workout description"
                //     value={values.description}
                //     onChange={(e) =>
                //         setValues({ ...values, description: e.target.value })
                //       }
                //     required
                //   />
                // </div>
                // <div className="form-submit-btn">
                //   <input type="submit" value="Save Record" />
                // </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       );
//   };

// export default UpdateWorkoutStatus;









import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import CancelIcon from "@mui/icons-material/Cancel";
import "./updateWorkoutstatus.scss";

const UpdateWorkoutStatus = ({ onClose, workoutId, onSuccess }) => {
  const [values, setValues] = useState({
    date: new Date().toISOString().split("T")[0],
    distance_Ran: "",
    no_of_Push_ups: "",
    no_of_Squats: "",
    no_of_Lunges: "",
    no_of_Planks: "",
    weight_Lifted: "",
    description: ""
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8060/api/currentWorkoutStatus/${workoutId}`)
      .then((res) => {
        const { date, distance_Ran, no_of_Push_ups, no_of_Squats, no_of_Lunges, no_of_Planks, weight_Lifted, description } = res.data;
        setValues({
          date,
          distance_Ran,
          no_of_Push_ups,
          no_of_Squats,
          no_of_Lunges,
          no_of_Planks,
          weight_Lifted,
          description
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to fetch workout details!",
          footer: `Error: ${err}`,
        });
      });
  }, [workoutId]);

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8060/api/currentWorkoutStatus/${workoutId}`, values)
      .then((res) => {
        console.log(res);
        Swal.fire(
          "Done!",
          "Workout Details Updated Successfully!",
          "success"
        );
        onSuccess(); // Trigger the callback to reload data
        onClose(); // Close the modal after successful update
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to update workout details!",
          footer: `Error: ${err}`,
        });
      });
  };

  return (
    <div className="Russa_Update_Current_Workout_Status">
      <div className="Russa_modal-overlay">
        <div className="Russa_modal-content">
          <button className="Russa_close-modal-button" onClick={onClose}>
            <CancelIcon />
          </button>
          <h1 className="Russa_add_pr_shd_form-title">Update Workouts Achievements</h1>
          <form onSubmit={handleUpdate}>
          <div className="user-input-box">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={values.date}
                    readOnly // Make the input field read-only
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
                      value={values.distance_Ran}
                      onChange={(e) =>
                        setValues({ ...values, distance_Ran: e.target.value })
                      }
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
                      value={values.no_of_Push_ups}
                      onChange={(e) =>
                        setValues({ ...values, no_of_Push_ups: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="marking-row">
                  <div className="user-input-box">
                    <label htmlFor="weight_Lifted">Weight Lifted(.Kg)</label>
                    <input
                      type="number"
                      id="weight_Lifted"
                      name="weight_Lifted"
                      placeholder="Enter weight lifted"
                      value={values.weight_Lifted}
                      onChange={(e) =>
                        setValues({ ...values, weight_Lifted: e.target.value })
                      }
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
                      value={values.no_of_Squats}
                      onChange={(e) =>
                        setValues({ ...values, no_of_Squats: e.target.value })
                      }
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
                      value={values.no_of_Lunges}
                      onChange={(e) =>
                        setValues({ ...values, no_of_Lunges: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="user-input-box">
                    <label htmlFor="no_of_Planks">Planks(Seconds)</label>
                    <input
                      type="number"
                      id="no_of_Planks"
                      name="no_of_Planks"
                      placeholder="Enter the number of seconds"
                      value={values.no_of_Planks}
                      onChange={(e) =>
                        setValues({ ...values, no_of_Planks: e.target.value })
                      }
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
                    value={values.description}
                    onChange={(e) =>
                        setValues({ ...values, description: e.target.value })
                      }
                    required
                  />
                </div>
                <div className="form-submit-btn">
                  <input type="submit" value="Update Workout Record" />
                </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateWorkoutStatus;
