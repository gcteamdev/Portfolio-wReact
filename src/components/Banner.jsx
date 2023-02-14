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
          <Slide top duration={1700}>
            <img className="my-pic d-none d-md-block" src={myPhoto} alt="pic" />
          </Slide>
          <img
            className=" d-md-none d-sm-block mobile-pic"
            src={myPhoto}
            alt="pic"
          />

          <div className="d-block slogan-wrapper ">
            <h1 className="d-md-none d-sm-block mobile-header spanSWE">
              A <span /* className="spanSWE" */>software Engineer </span>based
              in <br />
              Seattle,WA.
            </h1>
            <Bounce bottom duration={1500}>
              <h1 className="slogan-main d-none d-md-block spanSWE">
                A <span /* className="spanSWE" */>software Engineer </span>{' '}
                <br />
                based in Seattle,WA
              </h1>
            </Bounce>
          </div>
        </div>
        <ul className="box-area d-none d-lg-block">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Zoom duration={2500}>
        <div className="aboutMe d-none d-md-block">
          <h5>
            Hello world! I am Hamza, a product & team-focused FullStack
            developer, previously Lead React Developer Intern at ETGE. I Have
            rock solid experience in building responsive complex applications
            and I continue to learn new technologies to stay up to date with
            trends and current standards in the industry.
          </h5>
        </div>
      </Zoom>
      <div className="aboutMeMobile d-sm-block d-md-none">
        <h5>
          Hello world! I am Hamza, a product & team-focused FullStack developer,
          previously Lead React Developer Intern at ETGE. <br></br>
          <br></br>I Have rock solid experience in building responsive complex
          applications and I continue to learn new technologies to stay up to
          date in the industry.
        </h5>
      </div>

      <div className="text-center banner-btns d-none d-lg-flex">
        <a
          className=" btn btn-lg text-dark bg-warning"
          href="mailto:contact@gcteam.dev"
        >
          {' '}
          Contact Me!{' '}
        </a>
        <a className=" btn btn-lg btn-dark" href="#WebApp">
          {' '}
          View Projects
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
        <a className=" btn btn-lg btn-dark" href="#PERNpage">
          {' '}
          View Projects
        </a>
      </div>
    </>
  );
}

export default Banner;
