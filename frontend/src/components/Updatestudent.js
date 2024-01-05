import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const UpdateStudent = () => {
  const navigate = useNavigate();
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

  const handleSubmit = async () => {

    const updatedData = {
      name,
      age,
      gender,
    };

    try {

      await axios.put(`http://localhost:8071/student/update/${id}`, updatedData);
      console.log('Student updated successfully!');
      navigate('/');
      alert("Student updated");

    } catch (error) {
      console.error('Error updating student:', error.message);
    }
  };

  return (
    <div className="container">
      <h1><strong>Update Student</strong></h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary">Update</button><br></br>
           //
      </form>
    </div>
  );
}

export default UpdateStudent;
