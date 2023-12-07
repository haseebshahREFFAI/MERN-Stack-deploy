// components/profile.jsx

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Profile = () => {
  const [formData, setFormData] = useState({
    academicHistory: '',
    employmentHistory: '',
    skills: '',
  });

  useEffect(() => {
    // Fetch current user profile data and set the form
    const fetchProfileData = async () => {
      const res = await axios.get('http://localhost:5000/api/profile');
      setFormData(res.data);
    };

    fetchProfileData();
  }, []);

  const { academicHistory, employmentHistory, skills } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // Update user profile
    try {
      // Update user profile
      await axios.put('/api/profile', formData);
  
      // Show success message
      toast.success('Profile updated successfully');
  
      // Additional logic if needed
    } catch (error) {
      // Handle errors, e.g., show an error message
      toast.error('An error occurred while updating the profile');
    }
  };
  

  return (
    <form onSubmit={onSubmit}>
      <label>Academic History:</label>
      <input type="text" name="academicHistory" value={academicHistory} onChange={onChange} />
      <label>Employment History:</label>
      <input type="text" name="employmentHistory" value={employmentHistory} onChange={onChange} />
      <label>Skills:</label>
      <input type="text" name="skills" value={skills} onChange={onChange} />
      <button type="submit">Save Profile</button>
    </form>
  );
};

export default Profile;
