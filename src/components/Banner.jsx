import React from 'react';
import "./Banner.css";
import myPhoto from "../assets/Portfolio2023-warmer.jpg"
import Contact from './Contact';

function Banner() {
  return (
    <div>
        <div className="slogan-ctn">
        <img className="my-pic d-none d-lg-block" src={myPhoto} alt="pic" />
        <div className="d-block slogan-wrapper">
          <h1 className="d-md-none d-sm-block">
            A software developer based in <br />
            Seattle, WA.
          </h1>
          <h1 className="slogan-main d-none d-md-block">
            A software developer <br />
            based in Seattle, WA.
          </h1>

          <div className="wrapper">
            <a href="#todo-app" style={{textDecoration:"none"}}>
            <button>Projects</button>
            </a>
          </div>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Banner