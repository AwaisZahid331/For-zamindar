// import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './MyComponents/Navbar';
import About from './MyComponents/About';
import PastPapers from './MyComponents/PastPapers';
import Contact from './MyComponents/Contact';
import Help from './MyComponents/Help';
import Home from './MyComponents/Home';
import Footer from './MyComponents/Footer';
// import Signup from './MyComponents/Signup';
// import Login from './MyComponents/Login';











// Departments 
import ComSci from './Departments/ComSci';
import Bba from './Departments/Bba';
import Bio from './Departments/Bio';
import Botnay from './Departments/Botnay';
import Chemistry from './Departments/Chemistry';
import Ecnomics from './Departments/Ecnomics';
import Eng from './Departments/Eng';
import Islamic from './Departments/Islamic';
import Maths from './Departments/Maths';
import Phy from './Departments/Phy';
import Psyc from './Departments/Psyc';
import Urdu from './Departments/Urdu';



// Computer science semesters 
import S1 from './CS_Semesters/S1';
import S2 from './CS_Semesters/S2';
import S3 from './CS_Semesters/S3';
import S4 from './CS_Semesters/S4';
import S5 from './CS_Semesters/S5';
import S6 from './CS_Semesters/S6';
import S7 from './CS_Semesters/S7';
import S8 from './CS_Semesters/S8';



// BBA semesters

import Bba1 from './BBA_Semesters/Bba1';
import Bba2 from './BBA_Semesters/Bba2';
import Bba3 from './BBA_Semesters/Bba3';
import Bba4 from './BBA_Semesters/Bba4';
import Bba5 from './BBA_Semesters/Bba5';
import Bba6 from './BBA_Semesters/Bba6';
import Bba7 from './BBA_Semesters/Bba7';
import Bba8 from './BBA_Semesters/Bba8';




// ... (other imports)

// Biology semsester 
import Bio1 from './Bio_Semesters/Bio1';
import Bio2 from './Bio_Semesters/Bio2';
import Bio3 from './Bio_Semesters/Bio3';
import Bio4 from './Bio_Semesters/Bio4';
import Bio5 from './Bio_Semesters/Bio5';
import Bio6 from './Bio_Semesters/Bio6';
import Bio7 from './Bio_Semesters/Bio7';
import Bio8 from './Bio_Semesters/Bio8';


// Botany semesters 

import B_S1 from './Botany_Semesters/B_S1';
import B_S2 from './Botany_Semesters/B_S2';
import B_S3 from './Botany_Semesters/B_S3';
import B_S4 from './Botany_Semesters/B_S4';
import B_S5 from './Botany_Semesters/B_S5';
import B_S6 from './Botany_Semesters/B_S6';
import B_S7 from './Botany_Semesters/B_S7';
import B_S8 from './Botany_Semesters/B_S8';




import Che1 from './Chemistry_Semesters/Che1';
import Che2 from './Chemistry_Semesters/Che2';
import Che3 from './Chemistry_Semesters/Che3';
import Che4 from './Chemistry_Semesters/Che4';
import Che5 from './Chemistry_Semesters/Che5';
import Che6 from './Chemistry_Semesters/Che6';
import Che7 from './Chemistry_Semesters/Che7';
import Che8 from './Chemistry_Semesters/Che8';

// applying dark mode in skillHub 


import Es1 from './Eco_Semesters/Es1';
import Es2 from './Eco_Semesters/Es2';
import Es3 from './Eco_Semesters/Es3';
import Es4 from './Eco_Semesters/Es4';
import Es5 from './Eco_Semesters/Es5';
import Es6 from './Eco_Semesters/Es6';
import Es7 from './Eco_Semesters/Es7';
import Es8 from './Eco_Semesters/Es8';



import E1 from './Eng_Semesters/E1';
import E2 from './Eng_Semesters/E2';
import E3 from './Eng_Semesters/E3';
import E4 from './Eng_Semesters/E4';
import E5 from './Eng_Semesters/E5';
import E6 from './Eng_Semesters/E6';
import E7 from './Eng_Semesters/E7';
import E8 from './Eng_Semesters/E8';



import Is1 from './Islamic_Semesters/Is1';
import Is2 from './Islamic_Semesters/Is2';
import Is3 from './Islamic_Semesters/Is3';
import Is4 from './Islamic_Semesters/Is4';
import Is5 from './Islamic_Semesters/Is5';
import Is6 from './Islamic_Semesters/Is6';
import Is7 from './Islamic_Semesters/Is7';
import Is8 from './Islamic_Semesters/Is8';



import M_S1 from './Maths_Semesters/M_S1';
import M_S2 from './Maths_Semesters/M_S2';
import M_S3 from './Maths_Semesters/M_S3';
import M_S4 from './Maths_Semesters/M_S4';
import M_S5 from './Maths_Semesters/M_S5';
import M_S6 from './Maths_Semesters/M_S6';
import M_S7 from './Maths_Semesters/M_S7';
import M_S8 from './Maths_Semesters/M_S8';




import Phy1 from './Physics_Semesters/Phy1';
import Phy2 from './Physics_Semesters/Phy2';
import Phy3 from './Physics_Semesters/Phy3';
import Phy4 from './Physics_Semesters/Phy4';
import Phy5 from './Physics_Semesters/Phy5';
import Phy6 from './Physics_Semesters/Phy6';
import Phy7 from './Physics_Semesters/Phy7';
import Phy8 from './Physics_Semesters/Phy8';





import PS1 from './Psyc_Semesters/PS1';
import PS2 from './Psyc_Semesters/PS2';
import PS3 from './Psyc_Semesters/PS3';
import PS4 from './Psyc_Semesters/PS4';
import PS5 from './Psyc_Semesters/PS5';
import PS6 from './Psyc_Semesters/PS6';
import PS7 from './Psyc_Semesters/PS7';
import PS8 from './Psyc_Semesters/PS8';




import Us1 from './Urdu_Semesters/Us1';
import Us2 from './Urdu_Semesters/Us2';
import Us3 from './Urdu_Semesters/Us3';
import Us4 from './Urdu_Semesters/Us4';
import Us5 from './Urdu_Semesters/Us5';
import Us6 from './Urdu_Semesters/Us6';
import Us7 from './Urdu_Semesters/Us7';
import Us8 from './Urdu_Semesters/Us8';



function App() {
  // const [showSignup, setShowSignup] = useState(false);
  // const [showLogin, setShowLogin] = useState(false);
  // const [popup, setPopup] = useState('');

  // const handleSignupClick = () => {
  //   setShowSignup(true);
  //   setShowLogin(false);
  // };

  // const handleLoginClick = () => {
  //   setShowLogin(true);
  //   setShowSignup(false);
  // };
  return (
    <>
      
      {/* <div>
        {popup && <div>{popup}</div>}
        <button className="btn btn-primary me-2" onClick={handleSignupClick}>Sign Up</button>
        <button className="btn btn-success" onClick={handleLoginClick}>Login</button>
        {showSignup && <Signup setPopup={setPopup} />}
        {showLogin && <Login setPopup={setPopup} />}
      </div> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pastpapers" element={<PastPapers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />



          <Route path="/ComSci" element={<ComSci />} />
          <Route path="/bba" element={<Bba />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/botnay" element={<Botnay />} />
          <Route path="/chemistry" element={<Chemistry />} />
          <Route path="/ecnomics" element={<Ecnomics />} />
          <Route path="/phy" element={<Phy />} />
          <Route path="/psyc" element={<Psyc />} />
          <Route path="/urdu" element={<Urdu />} />
          <Route path="/maths" element={<Maths />} />
          <Route path="/islamic" element={<Islamic />} />
          <Route path="/eng" element={<Eng />} />



          {/* Computer <Science></Science> */}
          <Route path="/s1" element={<S1 />} />
          <Route path="/s2" element={<S2 />} />
          <Route path="/s3" element={<S3 />} />
          <Route path="/s4" element={<S4 />} />
          <Route path="/s5" element={<S5 />} />
          <Route path="/s6" element={<S6 />} />
          <Route path="/s7" element={<S7 />} />
          <Route path="/s8" element={<S8 />} />



          <Route path="/bba1" element={<Bba1 />} />
          <Route path="/bba2" element={<Bba2 />} />
          <Route path="/bba3" element={<Bba3 />} />
          <Route path="/bba4" element={<Bba4 />} />
          <Route path="/bba5" element={<Bba5 />} />
          <Route path="/bba6" element={<Bba6 />} />
          <Route path="/bba7" element={<Bba7 />} />
          <Route path="/bba8" element={<Bba8 />} />


          {/* Biology Semesters */}

          <Route path="/bio1" element={<Bio1 />} />
          <Route path="/bio2" element={<Bio2 />} />
          <Route path="/bio3" element={<Bio3 />} />
          <Route path="/bio4" element={<Bio4 />} />
          <Route path="/bio5" element={<Bio5 />} />
          <Route path="/bio6" element={<Bio6 />} />
          <Route path="/bio7" element={<Bio7 />} />
          <Route path="/bio8" element={<Bio8 />} />


          {/* This is Botany Semesters/ */}
          <Route path="/b_s1" element={<B_S1 />} />
          <Route path="/b_s2" element={<B_S2 />} />
          <Route path="/b_s3" element={<B_S3 />} />
          <Route path="/b_s4" element={<B_S4 />} />
          <Route path="/b_s5" element={<B_S5 />} />
          <Route path="/b_s6" element={<B_S6 />} />
          <Route path="/b_s7" element={<B_S7 />} />
          <Route path="/b_s8" element={<B_S8 />} />


          {/* This is for Chemistry Semesters */}
          <Route path="/che1" element={<Che1 />} />
          <Route path="/che2" element={<Che2 />} />
          <Route path="/che3" element={<Che3 />} />
          <Route path="/che4" element={<Che4 />} />
          <Route path="/che5" element={<Che5 />} />
          <Route path="/che6" element={<Che6 />} />
          <Route path="/che7" element={<Che7 />} />
          <Route path="/che8" element={<Che8 />} />





          <Route path="/es1" element={<Es1 />} />
          <Route path="/es2" element={<Es2 />} />
          <Route path="/es3" element={<Es3 />} />
          <Route path="/es4" element={<Es4 />} />
          <Route path="/es5" element={<Es5 />} />
          <Route path="/es6" element={<Es6 />} />
          <Route path="/es7" element={<Es7 />} />
          <Route path="/es8" element={<Es8 />} />



          <Route path="/e1" element={<E1 />} />
          <Route path="/e2" element={<E2 />} />
          <Route path="/e3" element={<E3 />} />
          <Route path="/e4" element={<E4 />} />
          <Route path="/e5" element={<E5 />} />
          <Route path="/e6" element={<E6 />} />
          <Route path="/e7" element={<E7 />} />
          <Route path="/e8" element={<E8 />} />



          <Route path="/is1" element={<Is1 />} />
          <Route path="/is2" element={<Is2 />} />
          <Route path="/is3" element={<Is3 />} />
          <Route path="/is4" element={<Is4 />} />
          <Route path="/is5" element={<Is5 />} />
          <Route path="/is6" element={<Is6 />} />
          <Route path="/is7" element={<Is7 />} />
          <Route path="/is8" element={<Is8 />} />




          <Route path="/m_s1" element={<M_S1 />} />
          <Route path="/m_s2" element={<M_S2 />} />
          <Route path="/m_s3" element={<M_S3 />} />
          <Route path="/m_s4" element={<M_S4 />} />
          <Route path="/m_s5" element={<M_S5 />} />
          <Route path="/m_s6" element={<M_S6 />} />
          <Route path="/m_s7" element={<M_S7 />} />
          <Route path="/m_s8" element={<M_S8 />} />



          <Route path="/phy1" element={<Phy1 />} />
          <Route path="/phy2" element={<Phy2 />} />
          <Route path="/phy3" element={<Phy3 />} />
          <Route path="/phy4" element={<Phy4 />} />
          <Route path="/phy5" element={<Phy5 />} />
          <Route path="/phy6" element={<Phy6 />} />
          <Route path="/phy7" element={<Phy7 />} />
          <Route path="/phy8" element={<Phy8 />} />


          <Route path="/ps1" element={<PS1 />} />
          <Route path="/ps2" element={<PS2 />} />
          <Route path="/ps3" element={<PS3 />} />
          <Route path="/ps4" element={<PS4 />} />
          <Route path="/ps5" element={<PS5 />} />
          <Route path="/ps6" element={<PS6 />} />
          <Route path="/ps7" element={<PS7 />} />
          <Route path="/ps8" element={<PS8 />} />




          <Route path="/ps1" element={<Us1 />} />
          <Route path="/ps2" element={<Us2 />} />
          <Route path="/ps3" element={<Us3 />} />
          <Route path="/ps4" element={<Us4 />} />
          <Route path="/ps5" element={<Us5 />} />
          <Route path="/ps6" element={<Us6 />} />
          <Route path="/ps7" element={<Us7 />} />
          <Route path="/ps8" element={<Us8 />} />

          {/* Default route */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

