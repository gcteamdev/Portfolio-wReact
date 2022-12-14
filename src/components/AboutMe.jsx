import React from 'react';
import aboutMe from '../assets/githubangel.png';
import "./Aboutme.css";

function AboutMe() {
  return (
    <div className="aboutme-page">

     <img src={aboutMe} alt="pic" className="aboutMe-pic" />

    </div>
  )
}

export default AboutMe