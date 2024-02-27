// src/components/Login.js

import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setPopup }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      setPopup(response.data.message);
      // Clear form data after successful login
      setFormData({ email: '', password: '' });
    } catch (error) {
      console.error(error.response.data);
      setPopup('Incorrect email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} autoComplete='off' />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} autoComplete='off' />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
