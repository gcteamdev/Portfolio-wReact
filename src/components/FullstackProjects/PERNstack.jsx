import React, { useState } from 'react';
import './PERN.css';
import orca from '../../assets/OrcaLocatorDesktop.png';

function PERNstack() {
  const [colorChange, setColorchange] = useState(false);
  const changeBgColor = () => {
    if (window.scrollY >= 900) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeBgColor);
  return (
    <div className="PERNpage" id="PERNpage">
      <div className="projectCtn">
        <h1 className="projects d-none d-lg-block">PROJECTS...</h1>
        <h1 className="projects-Mobile d-sm-block d-lg-none">PROJECTS...</h1>
      </div>
      <div className={colorChange ? 'orcaProjWrapper' : 'BgColorChange'}>
        <img className="orcaImg" src={orca} alt="orca" />
        <div>
          <h1 className="orcaProjecth1">
            {' '}
            <span className="orcaH1Span">ORCA Locator</span> <br></br>a
            Full-Stack(PERN) Web app!
          </h1>
          <h5 className="OrcatechStack">
            Tech Stack: PostgreSQL | Node.JS | Express | React
          </h5>
          <div className=" source-mobile-code ">
            <a
              className="source-code-btn btn btn-lg text-dark bg-white"
              target="_blank"
              href="https://github.com/gcteamdev/OrcaLocator.git"
            >
              {' '}
              Source Code{' '}
            </a>
            <button
              className="watch-demo-btn  btn btn-lg btn-dark"
              href="#"
            >
              {' '}
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PERNstack;
