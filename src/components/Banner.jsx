import React from 'react';
import './Banner.css';
import myPhoto from '../assets/myAvatar (1).png';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
//import Zoom from 'react-reveal/Zoom';

function Banner() {
  return (
    <div className="bannerPageWrapper">
      <div className="animation-area">
        <div className="slogan-ctn">
          {/*  <Zoom duration={2700}> */}
          <div className="my-pic-container">
            <img
              className="my-pic d-none d-md-block bg-fluid "
              src={myPhoto}
              alt="pic"
            />
          </div>
          {/*  </Zoom>
           */}

          <div className="d-block slogan-wrapper ">
            <Bounce bottom duration={1700}>
              <h1 className="d-md-none d-sm-block mobile-header spanSWE mt-5">
                A <span /* className="spanSWE" */>software Engineer </span>based
                in <br />
                Seattle,WA.
              </h1>
            </Bounce>
            <Bounce bottom duration={1600}>
              <h1 className="slogan-main d-none d-md-block spanSWE">
                A <span /* className="spanSWE" */>software Engineer </span>{' '}
                <br />
                based in Seattle,WA
              </h1>
            </Bounce>
          </div>
        </div>
      </div>
      
      <Slide bottom duration={2000}>
        <div className="aboutMe d-none d-lg-block">
       
          <h5>
            Hello world! I am Hamza, a product & team-focused FullStack
            developer, previously Lead React Developer Intern at ETGE. I Have
            rock solid experience in building responsive complex applications
            and I strive to keep abreast of the latest trends and industry
            standards by consistently updating my knowledge and mastering new
            technologies.
          </h5>
        </div>
      </Slide>
      <Slide bottom duration={2000}>
        <div className="aboutMeMobile d-sm-block d-lg-none col-12">
        <img
              className=" d-md-none d-sm-block mb-2 "
              src={myPhoto}
              alt="pic"
            />
          <h5 className="aboutme-h5">
            Hello world! I am Hamza, a product & team-focused FullStack
            developer, previously Lead React Developer Intern at ETGE. <br></br>
            <br></br>I Have rock solid experience in building responsive complex
            applications and I strive to keep abreast of the latest trends and
            industry standards by consistently updating my knowledge and
            mastering new technologies.
          </h5>
          
          <div className="mobileBtns">
        <button className="btn bg-warning">
          <a
            className=" btn  text-dark bg-warning"
            href="mailto:contact@gcteam.dev"
          >
            Contact Me!
          </a>
        </button>
        <button className="btn bg-white">
          <a className=" btn  projectMobile" href="#projects">
            Projects
          </a>
        </button>
      </div>
        </div>
      </Slide>
     

      <div className="text-center banner-btns d-none d-lg-flex">
        <a
          className=" btn btn-lg text-dark bg-warning"
          href="mailto:contact@gcteam.dev"
        >
          Contact Me!
        </a>
        <a className=" btn btn-lg btn-dark" href="#projects">
         View Projects
        </a>
      </div>
    </div>
  );
}

export default Banner;
