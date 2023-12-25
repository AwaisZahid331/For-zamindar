import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Urdu = () => {
  return (
    <>
      <br /><br />
      <div className="container mt-5">
        <h1 className='text-center mt-4'>Navigate through Urdu Semesters</h1><hr /><br />
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <div className="my-4">
              <NavLink to="/us1" className="btn btn-primary mx-2 my-2">
                Go to Semester 1
              </NavLink>
              {/* Add other buttons similarly */}
              <NavLink to="/us2" className="btn btn-primary mx-2 my-2">
                Go to Semester 2
              </NavLink><br />
              <NavLink to="/us3" className="btn btn-primary mx-2 my-2">
                Go to Semester 3
              </NavLink>
              <NavLink to="/us4" className="btn btn-primary mx-2 my-2">
                Go to Semester 4
              </NavLink><br />
              <NavLink to="/us5" className="btn btn-primary mx-2 my-2">
                Go to Semester 5
              </NavLink>
              <NavLink to="/us6" className="btn btn-primary mx-2 my-2">
                Go to Semester 6
              </NavLink><br />
              <NavLink to="/us7" className="btn btn-primary mx-2 my-2">
                Go to Semester 7
              </NavLink>
              <NavLink to="/us8" className="btn btn-primary mx-2 my-2">
                Go to Semester 8
              </NavLink><br />
              {/* ... */}
            </div>
          </div>
          <div className="col-md-6 text-center">
            {/* Replace 'path_to_your_image.jpg' with your image path */}
            <img
              src="/images/urdu.jpeg"
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

export default Urdu;
