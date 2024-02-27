import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ setPopup }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Clear form data before making the signup request
    setFormData({ username: '', email: '', password: '' });
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      setPopup(response.data.message);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setPopup(error.response.data.error);
      } else {
        setPopup('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} autoComplete='off'/>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} autoComplete='off'/>
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} autoComplete='off'/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;




