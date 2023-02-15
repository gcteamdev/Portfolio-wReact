import React from 'react';
import './Banner.css';
import myPhoto from '../assets/myAvatar (1).png';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

function Banner() {
  return (
    <>
      <div className="animation-area">
        <div className="slogan-ctn">
          <Zoom duration={2700}>
            <div className="my-pic-container">
              <img
                className="my-pic d-none d-md-block bg-fluid "
                src={myPhoto}
                alt="pic"
              />
            </div>
          </Zoom>

          <img
            className=" d-md-none d-sm-block mobile-pic"
            src={myPhoto}
            alt="pic"
          />

          <div className="d-block slogan-wrapper ">
            <Bounce bottom duration={1700}>
              <h1 className="d-md-none d-sm-block mobile-header spanSWE">
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
        <div className="aboutMe d-none d-md-block">
          <h5>
            Hello world! I am Hamza, a product & team-focused FullStack
            developer, previously Lead React Developer Intern at ETGE. I Have
            rock solid experience in building responsive complex applications
            and I continue to learn new technologies to stay up to date with
            trends and current standards in the industry.
          </h5>
        </div>
      </Slide>
      <Slide bottom duration={2000}>
        <div className="aboutMeMobile d-sm-block d-md-none">
          <h5 className="aboutme-h5">
            Hello world! I am Hamza, a product & team-focused FullStack
            developer, previously Lead React Developer Intern at ETGE. <br></br>
            <br></br>I Have rock solid experience in building responsive complex
            applications and I continue to learn new technologies to stay up to
            date in the industry.
          </h5>
        </div>
      </Slide>
      <div className="text-center banner-btns d-none d-lg-flex">
        <a
          className=" btn btn-lg text-dark bg-warning"
          href="mailto:contact@gcteam.dev"
        >
          {' '}
          Contact Me!{' '}
        </a>
        <a className=" btn btn-lg btn-dark" href="#projects">
          {' '}
          Projects
        </a>
      </div>
      <div className="text-center banner-btns-sm d-lg-none d-sm-block">
        <a
          className=" btn btn-lg text-dark bg-warning"
          href="mailto:contact@gcteam.dev"
        >
          {' '}
          Contact Me!{' '}
        </a>
        <a className=" btn btn-lg btn-dark" href="#projects">
          {' '}
          Projects
        </a>
      </div>
    </>
  );
}

export default Banner;
