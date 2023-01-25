import React from 'react';
import landingpage from "../assets/LandingPage.png";
import landingpageLg from "../assets/iMac iPad and iPhone X.png";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className= "landingPage">
        <div className="LandingPage-headerCtn">
        <h1 className="LandingPage-header">Landing Page </h1>
        <h2 className="">A Senior Living Home | Landing page project with React.js </h2>
        <br/>
        <h5 className="">Tech Stack: React.JS | Boortrap | Material UI</h5>
        </div>
        <img className="landingPageImg d-lg-none"src={landingpage} alt="landingpage"/>
        <img className="landingPageLg d-lg-block d-none"src={landingpageLg} alt="landingpage"/>
        <div className="landingCode-btns ">
        <a className="source-code-btn btn btn-lg text-dark bg-white mb-5" target='_blank' href="https://github.com/gcteamdev/LandingPage-Senior.Home"> Source Code </a>
        <a className="watch-demo-btn  btn btn-lg btn-dark landingPageLive mb-5"  href="https://landingpage-seniorliving.netlify.app/"  target="_blank"> Watch Live</a>

        </div>
    </div>
  )
}

export default LandingPage