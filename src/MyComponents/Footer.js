import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {

    return (
        <>
            <div>

                <footer className="text-lg-start text-white bg-dark " style={{ backgroundColor: "#1c2331" }}>
                    {/* <section className="d-flex justify-content-between p-4" style={{ backgroundColor: "gray" }}> 
                    </section> */}
                    <section className="">
                        <div className="container text-center  mt-5 ">
                            <div className="row" style={{ marginTop: "20px" }}>
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    {/* <!-- Content --> */}
                                    <h6 className="text-uppercase fw-bold">Skill Hub</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "100px", backgroundColor: "#7c4dff", height: "2px" }} />
                                    <p>
                                        Embark on a journey of knowledge at Zamindar University,
                                        where learning becomes a shared experience and success is achieved together.
                                    </p>
                                </div>
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* <!-- Links --> */}
                                    <h6 className="text-uppercase fw-bold">Category</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "100px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        <NavLink to="/pastpapers" className="text-white">Past Papers</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="#!" className="text-white">C/C++</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="#!" className="text-white">Notes</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="#!" className="text-white">Slides</NavLink>
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: " 100px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        <NavLink to="#!" className="text-white">Your Account</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="#!" className="text-white">Become an Affiliate</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="#!" className="text-white">Shipping Rates</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="/help" className="text-white">Help</NavLink>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    {/* <!-- Links --> */}
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "100px", backgroundColor: " #7c4dff", height: "2px" }}
                                    />
                                    <p><i className="bi bi-house-add-fill"></i> Gujrat, Pakistan</p>
                                    <p><i className="bi bi-envelope-arrow-down-fill"></i> awaistech63@gmail.com</p>
                                    {/* <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p> */}
                                </div>

                            </div>

                        </div>
                    </section>

                    <div className="d-flex justify-content-end mb-3">
                        <NavLink href="" className="text-white me-4">
                            <i className="bi bi-facebook" style={{ fontSize: "1.3rem" }}></i>
                        </NavLink>

                        <NavLink href="" className="text-white me-4">
                            <i className="bi bi-google" style={{ fontSize: "1.3rem" }}></i>
                        </NavLink>

                        <NavLink href="" className="text-white me-4">
                            <i className="bi bi-instagram" style={{ fontSize: "1.3rem" }}></i>
                        </NavLink>

                        <NavLink href="" className="text-white me-4">
                            <i className="bi bi-linkedin" style={{ fontSize: "1.3rem" }}></i>
                        </NavLink>

                        <NavLink href="" className="text-white me-4">
                            <i className="fab fa-github" style={{ fontSize: "1.3rem" }}></i>
                        </NavLink>
                    </div>
                    <div className="text-center p-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>

                        <NavLink className="text-white" to=""></NavLink>


                        <div className="x  align-items-center">
                            <NavLink className="text-white" to=""></NavLink>
                            <span className='text-center'>Copyright © 2023</span>

                        </div>


                    </div>


                    {/* <!-- Copyright --> */}
                </footer>
                {/* <!-- Footer --> */}

                {/* <!-- End of .container --> */}
            </div>


        </>

    )
}

export default Footer
