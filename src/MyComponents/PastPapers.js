import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const PastPapers = () => {
    return (
        <>
            <br /><br /><br />

            <div className="container mt-4">
                <h1 className='text-center heading'>Departments</h1> <hr /> <br />
                <div className="row ">
                    <div className="col-md-6">
                        <NavLink to="/comsci" className="btn btn-success btn-block mb-2 p-3 bold-text">Computer Science Department </NavLink>
                        <NavLink to="/maths" className="btn btn-success btn-block mb-2 p-3 bold-text">Mathematics Department</NavLink>
                        <NavLink to="/eng" className="btn btn-success btn-block mb-2 p-3">English Department</NavLink>
                        <NavLink to="/urdu" className="btn btn-success btn-block mb-2 p-3">Urdu Department</NavLink>
                        <NavLink to="/bba" className="btn btn-success btn-block mb-2 p-3">Bachelor of Business Administration Department</NavLink>
                        <NavLink to="/chemistry" className="btn btn-success btn-block mb-2 p-3">Chemistry Department</NavLink>
                        {/* Add more NavLink buttons as needed */}
                    </div>
                    <div className="col-md-6">
                        <NavLink to="/botnay" className="btn btn-success btn-block mb-2 p-3">Botany Department</NavLink>
                        <NavLink to="/bio" className="btn btn-success btn-block mb-2 p-3">Biology Department</NavLink>
                        <NavLink to="/psyc" className="btn btn-success btn-block mb-2 p-3">Psychology Department</NavLink>
                        <NavLink to="/phy" className="btn btn-success btn-block mb-2 p-3">Physics Department</NavLink>
                        <NavLink to="/ecnomics" className="btn btn-success btn-block mb-2 p-3">Economics Department</NavLink>
                        <NavLink to="/islamic" className="btn btn-success btn-block mb-2 p-3">Islamic Department</NavLink>

                        {/* Add more NavLink buttons as needed */}
                    </div>
                </div>

            </div>
            <br /><br />
        </>
    );
}

export default PastPapers;
