//import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function ColorSchemesExample() {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-3">

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
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            
            <li className="nav-item">
              <a className="nav-link " href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
       
        </div>
      </nav>
    </>
  );
}

export default ColorSchemesExample;

/* 
<div className="button">
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
*/
