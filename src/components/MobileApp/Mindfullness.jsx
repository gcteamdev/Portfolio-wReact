import React from 'react';
//import { useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Mindfullness.css';

function Mindfullness() {
 
  const alertmsg = () => {
    alert("Sorry not displayed here, due to privacy restrictions, if interested please contact me!");
  }
  
  return (
    <div className="mobile-App">
      <br /> <br />
      <br />
      <h1 className="mobile-app-header d-none d-lg-block"> Mindfulness App</h1>
      <h1 className="mobile-app-header d-lg-none d-md-block mobileApp-h1">
        {' '}
        Mindfulness App
      </h1>
      <h3 className="mb-3"> Tech stack: React-Native, Redux, Expo-CLI </h3>
      {/*  -- Slideshow-- */}
      <div className="d-none d-lg-block">
        <Slide>
          <div className="each-slide-effect p-5">
            <div className="slide-1">{/* <span>Slide 1</span> */}</div>
          </div>
          <div className="each-slide-effect p-5">
            <div className="slide-2">{/* <span>Slide 2</span> */}</div>
          </div>
          <div className="each-slide-effect p-5">
            <div className="slide-3">{/* <span>Slide 3</span> */}</div>
          </div>
          <div className="each-slide-effect p-5">
            <div className="slide-4">{/* <span>Slide 3</span> */}</div>
          </div>
          <div className="each-slide-effect p-5">
            <div className="slide-5">{/* <span>Slide 3</span> */}</div>
          </div>
          <div className="each-slide-effect p-5">
            <div className="slide-6">{/* <span>Slide 3</span> */}</div>
          </div>
        </Slide>
      </div>
      {/* --for mobile */}
      <div className="d-lg-none d-md-block mobile-app-slider">
        <Slide>
          <div className="each-slide-effect ">
            <div className="slide-1 slide-mobile">
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          <div className="each-slide-effect">
            <div className="slide-2 slide-mobile">
              {/* <span>Slide 2</span> */}
            </div>
          </div>
          <div className="each-slide-effect">
            <div className="slide-3 slide-mobile">
              {/* <span>Slide 3</span> */}
            </div>
          </div>
          <div className="each-slide-effect ">
            <div className="slide-4 slide-mobile">
              {/* <span>Slide 3</span> */}
            </div>
          </div>
          <div className="each-slide-effect ">
            <div className="slide-5 slide-mobile">
              {/* <span>Slide 3</span> */}
            </div>
          </div>
          <div className="each-slide-effect ">
            <div className="slide-6 slide-mobile">
              {/* <span>Slide 3</span> */}
            </div>
          </div>
        </Slide>
      </div>
      <div className="source-Todo-ctn source-mobile-code ">
        <a
          className="source-code-btn btn btn-lg text-dark bg-white"
          target="_blank"
          href="https://github.com/gcteamdev?tab=repositories"
        >
          {' '}
          Source Code{' '}
        </a>
        <button
          className="watch-demo-btn  btn btn-lg btn-dark"
          href="#RNapp"
          onClick={alertmsg}
        >
          {' '}
          Watch Demo
        </button>
      </div>
      <br /> <br />
      <br />
    </div>
  );
}

export default Mindfullness;
