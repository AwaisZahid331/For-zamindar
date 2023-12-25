import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <>
      <div>
        {/* Our Mission Section */}
        <div className="container-lg text-center mt-5">
          <div className="content">
            <h1 className='display-4 mb-4'>Our Mission</h1>
            <p className="lead">Our website aims to make education accessible and empowering,
              providing support to individuals on their learning journeys.
              We believe that everyone deserves access to high-quality education,
              and thus, our mission is to offer resources and guidance that are accessible to all.
              We aspire to build a vibrant learning community where members can share their experiences,
              support each other, and strive to innovate in the field of education.
              Our goal is to create a positive global impact in education by connecting diverse audiences
              and establishing an inclusive and comprehensive learning platform.</p>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="container mt-5 text-center">
          <h2 className="display-4 mb-5">Our Services</h2>
          <div className="card-group">
            {/* Card 1 */}
            <div className="card ">
              <img className="card-img-top" src="https://static3.avast.com/10001215/web/i/index2/for-home.jpg" alt='' />
              <div className="card-body">
                <h5 className="card-title border-bottom border-success">What We Offer</h5>
                <p className="card-text">Quality resources, expert guidance, and a collaborative community. Access top-notch materials, connect with peers, and explore new learning methods.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card ">
              <img className="card-img-top" src="https://static3.avast.com/10001215/web/i/index2/for-partners.jpg" alt='' />
              <div className="card-body">
                <h5 className="card-title border-bottom border-success">Join Our Community</h5>
                <p className="card-text">Become part of a diverse, inclusive learning network. Share experiences, gain insights, and contribute to a global educational impact. Let's learn and grow together!</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card ">
              <img className="card-img-top" src="https://static3.avast.com/10001215/web/i/index2/for-business.jpg" alt='' />
              <div className="card-body">
                <h5 className="card-title border-bottom border-success">Our Vision</h5>
                <p className="card-text">Striving for a world where education knows no boundaries. We envision a future where learning fosters individual growth, creating a positive global impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div><br /><br />
    </>
  );
};

export default About;
