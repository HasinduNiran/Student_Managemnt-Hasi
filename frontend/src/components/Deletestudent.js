import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './DeleteStudent.css';

export default function DeleteStudent() {
    const navigate =useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    useEffect(() => {

        const fetchStudent = async () => {
            try {
                const response = await axios.get(`http://localhost:8071/student/get/${id}`);
                const userData = response.data.user;


                setName(userData.name);
                setAge(userData.age);
                setGender(userData.gender);
            } catch (error) {
                console.error('Error fetching student data:', error.message);
            }
        };


        fetchStudent();
    }, [id]);



    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8071/student/delete/${id}`);
            console.log('Deleted successful'); // Log the response for debugging

            navigate('/');

            alert("Student deleted successfully");

        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <div className="container">
            <h2>Delete Student</h2>
            <p>Are you sure you want to delete the following student?</p>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Student Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Student Age</label>
                <input
                    type="number"
                    className="form-control"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender</label>
                <input
                    type="text"
                    className="form-control"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
            </div>
            <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
    );
}
