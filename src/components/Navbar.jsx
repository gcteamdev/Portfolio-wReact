//import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from 'mdb-react-ui-kit';

function ColorSchemesExample() {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  return (
    <div className="navBar">
      <MDBNavbar expand="lg" dark bgColor="dark">
        <MDBContainer fluid>
          <div className="button btn-white">
            <a className="first"> H A M Z A </a>
            <a className="slidein"> Hi!</a>
            <a className="slidein two"> Thank you </a>
            <a className="slidein three"> For Visiting </a>
            <a className="slidein four"> Hope you are </a>
            <a className="slidein five"> Having a </a>
            <a className="slidein six"> ...great day!</a>
            <a className="slidein seven"> ...Smile </a>
            <a className="slidein eight"> Solve it all </a>
            <a className="slidein nine"> ...So, </a>
            <a className="slidein ten"> Let's Smile! </a>
          </div>

          {/* <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand> */}
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
            className="mr-5 bg-white"
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id="navbarColor02">
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="">
                <MDBNavbarLink
                  aria-current="page"
                  href="https://www.linkedin.com/in/devhamza/"
                  target="_blank"
                >
                  Linkedin
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="https://github.com/gcteamdev"
                  target="_blank"
                >
                  Code
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#projects">
                  Projects
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="mailto:contact@gcteam.dev"
                  target="_blank"
                >
                  Contact
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default ColorSchemesExample;
