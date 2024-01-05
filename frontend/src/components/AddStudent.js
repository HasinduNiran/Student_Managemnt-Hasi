import React, { useState } from "react";
import axios from "axios";
import "./Addstudent.css";
import { useNavigate, useParams } from "react-router-dom";

export default function AddStudent() {
    const navigate =useNavigate();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");


 


    function sendData(e) {
        e.preventDefault();

        const newStudent = {


            name,
            age,
            gender
        }
       axios.post("http://localhost:8071/student/add",newStudent).then(()=>{
        alert("student added");
        navigate('/');
        
       }).catch((err)=>{
            alert(err)
       })
    }
    return (
        <div className="container">
            <h1>Add Student</h1>
            <form onSubmit={sendData}>
                <div className="mb-3">
                    <label for="name" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="name"

                        onChange={(e) => {
                            setName(e.target.value);

                        }}
                    />

                </div>
                <div className="mb-3">
                    <label for="name" className="form-label">Student Age</label>
                    <input type="number" className="form-control" id="age"
                        onChange={(e) => {
                            setAge(e.target.value);

                        }} />

                </div>
                <div className="mb-3">
                    <label for="name" className="form-label">Gender</label>
                    <input type="text" className="form-control" id="gender"
                        onChange={(e) => {
                            setGender(e.target.value);

                        }} />

                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
             </form>
        </div>
    )

} 