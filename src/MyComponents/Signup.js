import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ setPopup }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [showSignup, setShowSignup] = useState(true); // Initially show the signup form

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

  const handleClose = () => {
    setShowSignup(false); // Close the signup form
  };

  return (
    <>
      {showSignup && (
        <div className="signup-form-container">
          <div className="signup-form">
            <form onSubmit={handleSubmit} className="p-3">
          <h2>Hi user👋</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-sm" name="username" placeholder="Username" value={formData.username} onChange={handleChange} autoComplete='off' required/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="email" className="form-control form-control-sm" name="email" placeholder="Email" value={formData.email} onChange={handleChange} autoComplete='off' required/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group"><br />
                    <input type="password" className="form-control form-control-sm" name="password" placeholder="Password" value={formData.password} onChange={handleChange} autoComplete='off' required/>
                  </div>
                </div>
                <div className="col-md-6"> <br />
                  <button type="submit" className="btn btn-primary btn-sm btn-block">Sign Up</button>
                </div>
              </div> <br />
                 <button className="btn btn-danger close-icon" onClick={handleClose}>Close</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
