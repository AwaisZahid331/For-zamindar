// import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState, useEffect } from 'react';

const Navbar = (props) => {

    // const [textColor, setTextColor] = useState('black');

    // const toggleMode = () => {
    //     props.toggleMode();
    //     setTextColor(props.mode === 'light' ? 'black' : 'white');
    // };

    // useEffect(() => {
    //     const navLinks = document.querySelectorAll('.nav-link');
    //     navLinks.forEach((link) => {
    //         link.style.color = textColor;
    //     });
    // }, [textColor]);
    return (
        <>

            <div>
            <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'white' }}>
                    {/* <nav className={`navbar navbar-expand-lg ${props.mode} bg-${props.mode}`}> */}
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
                        <div >
                            <label
                                className="form-check form-switch"

                                htmlFor="flexSwitchCheckDefault">

                            </label>
                            {/* <input onClick={props.toggleMode}  id="flexSwitchCheckDefault" /> */}
                        </div>
                    </div>
                </nav>
                {/* ------------------------------- */}




            </div >
        </>
    )
}

export default Navbar
