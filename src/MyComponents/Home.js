// import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Home = (props) => {
  // useEffect(() => {
  //   const script1 = document.createElement('script');
  //   script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
  //   script1.async = true;
  //   document.body.appendChild(script1);

  //   const script2 = document.createElement('script');
  //   script2.src = 'https://mediafiles.botpress.cloud/8d7fb67f-471e-46da-8bad-f22b3ad957de/webchat/config.js';
  //   script2.defer = true;
  //   document.body.appendChild(script2);

  //   // Cleanup function to remove the scripts when the component unmounts
  //   return () => {
  //     document.body.removeChild(script1);
  //     document.body.removeChild(script2);
  //   };
  // }, []);

  return (
    <>
      <div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/img1.jpg" className="d-block w-100" alt="..." style={{ height: "500px" }} />
              <div className="carousel-caption d-flex align-items-center justify-content-center h-100">
                <div className="text-light"><br /> <br /><br />
                  <h3>Acquire expertise with skillHub.</h3>
                  <p>This blog offers an abundance of assets including UOS Past Papers, Past Paper Arrangements, Talk Notes, Slides,
                    Suggested PDF Books, PDF Freebees, and Course Blueprints from the CS (Software engineering Division).
                    Custom fitted for understudies signed up for Private Associate Schools of the College of Sargodha, our essential accentuation is on conveying Past Papers
                    and their Answers. We invite your contributions to foster a cooperative environment that supports and helps
                    individual students. Your active participation helps enhance the learning experience for everyone.</p>
                  <div>
                    <NavLink to="/contact"><button className="btn btn-primary" style={{ margin: "3px" }}>Contact Us</button></NavLink>
                    <NavLink to="/pastpapers"><button className="btn btn-success">Past Papers</button></NavLink>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------- */}
        <br /><br />
        <div className="container mt-4" >
          <div className="clearfix mt-4 ">
            <h2>Your Gateway to Premium Academic <br /> Resources</h2>
            <img src="/images/edu.png" class="col-md-6 float-md-end mb-3 ms-md-3 rounded-start  animated-image" alt="..." />
            <p>
              Creating a website tailored for university students is a fantastic initiative! Providing notes,
              past papers, and helpful materials on your platform would be incredibly beneficial for students.
            </p>

            <p>
              You can not only offer academic support but also incorporate practical applications and real-life
              examples related to their courses.
            </p>

            <p>
              Through this approach, you'll assist them in understanding subjects and connecting theoretical knowledge to
              real-world contexts, enhancing their overall learning experience.
              These resources will enrich their academic journey, empowering them to feel more confident and prepared.
            </p>
            <p>
              <b>The paid section</b> a result of dedicated crafting and personal expertise, stands as a treasure trove for
              academic enrichment. With my firsthand experience in creating these notes, their reliability and quality
              are assured, promising invaluable assets for students seeking depth in their studies.
            </p>
          </div>

        </div><br /><br />
      </div>
    </>
  );
};

export default Home;
