import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Phy = () => {
  return (
    <>
      <br /><br />
      <div className="container mt-5">
        <h1 className='text-center mt-4'>Navigate through Physics Semesters</h1><hr /><br />
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <div className="my-4">
              <NavLink to="/phy1" className="btn btn-primary mx-2 my-2">
                Go to Semester 1
              </NavLink>
              {/* Add other buttons similarly */}
              <NavLink to="/phy2" className="btn btn-primary mx-2 my-2">
                Go to Semester 2
              </NavLink><br />
              <NavLink to="/phy3" className="btn btn-primary mx-2 my-2">
                Go to Semester 3
              </NavLink>
              <NavLink to="/phy4" className="btn btn-primary mx-2 my-2">
                Go to Semester 4
              </NavLink><br />
              <NavLink to="/phy5" className="btn btn-primary mx-2 my-2">
                Go to Semester 5
              </NavLink>
              <NavLink to="/phy6" className="btn btn-primary mx-2 my-2">
                Go to Semester 6
              </NavLink><br />
              <NavLink to="/phy7" className="btn btn-primary mx-2 my-2">
                Go to Semester 7
              </NavLink>
              <NavLink to="/phy8" className="btn btn-primary mx-2 my-2">
                Go to Semester 8
              </NavLink><br />
              {/* ... */}
            </div>
          </div>
          <div className="col-md-6 text-center">
            {/* Replace 'path_to_your_image.jpg' with your image path */}
            <img
              src="/images/phy.jpg"
              alt="Computer Science Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <br /><br />
    </>
  );
};

export default Phy;
