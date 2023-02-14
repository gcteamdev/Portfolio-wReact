import React, { useState } from 'react';
import './PERN.css';
import orca from '../../assets/OrcaLocatorDesktop.png';
import bakery from '../../assets/LaminaBakes.png';
import Slide from 'react-reveal/Slide';

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
        <Slide right duration={1600}>
          <h1 className="projects d-none d-lg-block">PROJECTS...</h1>
        </Slide>
        <h1 className="projects-Mobile d-sm-block d-lg-none">PROJECTS...</h1>
      </div>
      <div className="project-1">
        <div className={colorChange ? 'bakeryProjWrapper' : 'BgColorChange'}>
          <img
            className="orcaImg d-md-none d-sm-block"
            src={bakery}
            alt="bakery cap"
          />
          <div className="p-5 bakeryDetails">
            <h1 className="orcaProjecth1 ">
              {' '}
              <span className="orcaH1Span">Lamina's Bakes</span> <br></br>
              <span className="bg-white rounded">
                An advanced shopping cart website.
              </span>
            </h1>
            <h5 className="OrcatechStack bg-light d-none d-md-block">
              Tech Stack: React | Redux-toolkit | Redux-Thunk| Api | Typescript
              | Material UI
            </h5>
            <div className=" source-mobile-code ">
              <a
                className="source-code-btn btn btn-lg text-warning bg-dark mb-1"
                target="_blank"
                href="https://github.com/gcteamdev/ShoppingCart-Ecommerce-Lamina-s-Bakery.git"
              >
                Source Code
              </a>
              <a
                className="watch-demo-btn  btn btn-lg btn-danger bg-danger"
                target="_blank"
                href="https://laminabakes.netlify.app"
              >
                Watch Live
              </a>
            </div>
          </div>
          <img
            className="orcaImg d-none d-md-block"
            src={bakery}
            alt="bakery cap"
          />
        </div>
      </div>
      <div className="project-2">
        <div className="orcaProjWrapper">
          <Slide left duration={1600}>
            <img className="orcaImg" src={orca} alt="orca" />
          </Slide>
          <Slide right duration={1600}>
            <div>
              <h1 className="orcaProjecth1">
                {' '}
                <span className="orcaH1Span">ORCA Locator</span> <br></br>
                <span className="bg-white rounded d-none d-md-block">
                  a Full-Stack(PERN) Web app!
                </span>
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
                  Source Code
                </a>
                <button
                  className="watch-demo-btn  btn btn-lg btn-dark"
                  href="#"
                >
                  Watch Demo
                </button>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default PERNstack;
