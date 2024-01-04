import React from "react";
import axios from "axios";

const DeleteStudent = ({ id }) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:8071/student/::id`)
      .then(() => {
        // Optionally, you can update the state or perform any additional actions after deletion.
        console.log("Student deleted successfully!");
      })
      .catch((err) => {
        console.error("Error deleting student:", err);
      });
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteStudent;
