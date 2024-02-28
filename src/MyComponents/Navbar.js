import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import '../App.css';
import Login from './Login';

const Navbar = () => {


  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [popup, setPopup] = useState('');
  const [signupFormData, setSignupFormData] = useState({ username: '', email: '', password: '' });
  const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
    setSignupFormData({ username: '', email: '', password: '' }); // Clear signup form data
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
    setLoginFormData({ email: '', password: '' }); // Clear login form data
  };

 

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow fixed-top" style={{ backgroundColor: 'white' }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pastpapers">Past Papers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/help">Help</NavLink>
            </li>
          </ul>
        </div>
        <div>
          {popup && <div>{popup}</div>}
          <button className="btn btn-primary me-2 btn-sm" onClick={handleSignupClick}>Sign Up</button>
          <button className="btn btn-success btn-sm" onClick={handleLoginClick}>Login</button>

          {showSignup && <Signup setPopup={setPopup} />}
          {showLogin && <Login setPopup={setPopup} />}
          <div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
