import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setPopup }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showLogin, setShowLogin] = useState(true); // Initially show the login form

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

  const handleClose = () => {
    setShowLogin(false); // Close the login form
  };

  return (
    <>
      {showLogin && (
        <div className="login-form-container">
          <div className="login-form">
            <form onSubmit={handleSubmit} className="p-3">
              <h2>Hi user👋</h2>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="email" className="form-control form-control-sm" name="email" placeholder="Email" value={formData.email} onChange={handleChange} autoComplete='off' required/>
                </div>
                <div className="col-md-6 mb-3">
                  <input type="password" className="form-control form-control-sm" name="password" placeholder="Password" value={formData.password} onChange={handleChange} autoComplete='off' required />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <button type="submit" className="btn btn-primary btn-sm btn-block">Login</button>
                </div>
              </div>
              <button className=" btn btn-danger close-icon " onClick={handleClose}>Close</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
