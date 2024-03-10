import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './PastPapers.css'; // Import custom CSS for additional styling

const DepartmentButton = ({ to, children }) => (
    <NavLink to={to} className="btn btn-custom btn-block mb-3">
        {children}
    </NavLink>
);

const PastPapers = () => {
    return (
        <div className="container mt-5">  <br />
            <h1 className="text-center heading">Departments</h1>
            <hr className="divider" />
            <div className="row">
                <div className="col-md-6">
                    <div className="department-buttons">
                        <DepartmentButton to="/comsci">Computer Science Department</DepartmentButton>
                        <DepartmentButton to="/maths">Mathematics Department</DepartmentButton>
                        <DepartmentButton to="/eng">English Department</DepartmentButton>
                        <DepartmentButton to="/urdu">Urdu Department</DepartmentButton>
                        <DepartmentButton to="/bba">Bachelor of Business Administration Department</DepartmentButton>
                        <DepartmentButton to="/chemistry">Chemistry Department</DepartmentButton>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="department-buttons">
                        <DepartmentButton to="/botany">Botany Department</DepartmentButton>
                        <DepartmentButton to="/bio">Biology Department</DepartmentButton>
                        <DepartmentButton to="/psyc">Psychology Department</DepartmentButton>
                        <DepartmentButton to="/phy">Physics Department</DepartmentButton>
                        <DepartmentButton to="/economics">Economics Department</DepartmentButton>
                        <DepartmentButton to="/islamic">Islamic Department</DepartmentButton>
                    </div>
                </div>
            </div>
      <br />  </div>
    );
}

export default PastPapers;
