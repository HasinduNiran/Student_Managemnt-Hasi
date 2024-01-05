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
            <strong>Name: {student.name} </strong> <br />
            <strong>Age: {student.age}</strong> <br />
            <strong>Gender:{student.gender} </strong><br />

            <Link to={`/update/${student._id}`} className="nav-link nav-link-update">
              Update
            </Link>
            <Link to={`/delete/${student._id}`} className="nav-link nav-link-delete">
              Delete
            </Link>


          </li>
        ))}
      </ul>
    </div>
  );
}
