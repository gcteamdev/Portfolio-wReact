import React from 'react';
import landingpage from "../assets/LandingPage.png";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className= "landingPage">
        <div className="taskiry-outer d-lg-none d-md-block mobile-todo">
        <h1 className="todoApp-Header">Taskiary</h1>
        <h2 className="mobile-descriptionTodo">Project management app! </h2>
        <br/>
        <h5 className="mobile-todo-tech">Tech Stack: React.JS | Node.JS</h5>
        </div>
        <img className="landingPageImg "src={landingpage} alt="landingpage"/>
        <div className="landingCode">
        <a className="source-code-btn btn btn-lg text-dark bg-white" target='_blank' href="https://github.com/gcteamdev/LandingPage-Senior.Home"> Source Code </a>
        <a className="watch-demo-btn  btn btn-lg btn-dark"  href="#" > Watch Demo</a>

        </div>
    </div>
  )
}

export default LandingPage