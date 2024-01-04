import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function DeleteStudent() {
    const { id } = useParams();


    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:8071/student/delete/${id}`);
            console.log("Delete Response:", response); // Log the response for debugging

            if (response.data.deleted) {
                alert("Student deleted successfully");
            } else {
                alert("Failed to delete student");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <div className="container">
            <h2>Delete Student</h2>
            <p>Are you sure you want to delete the following student?</p>

            <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
    );
}
