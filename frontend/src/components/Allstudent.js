import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./AllStudent.css";

export default function AllStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios.get("http://localhost:8071/student/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    }

    getStudents();
  }, []);

  return (
    <div className="all-students-container">
      <h1>All Students</h1>
      <ul className="students-list">
        {students.map((student) => (
          <li key={student._id} className="student-item">
            <strong>Name:</strong> {student.name} <br />
            <strong>Age:</strong> {student.age} <br />
            <strong>Gender:</strong> {student.gender} <br />

            {/* Use Link for navigation to the update page */}
            <Link to={`/update/${student._id}`} className="nav-link">
              Update
            </Link>
            {/* Use Link for navigation to the update page */}
            <Link to={`/delete/${student._id}`} className="nav-link">
              Delete
            </Link>

          </li>
        ))}
      </ul>
    </div>
  );
}
