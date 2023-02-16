import React from 'react';
import './Demo.css';
import { MDBContainer } from 'mdb-react-ui-kit';
import Slide from 'react-reveal/Slide';

function Demo() {
  return (
    <div className="Demo-page" id="WebApp">
      <div className="text-center text-dark p-3 bg-warning mb-5">
        <Slide bottom duration={1800}>
          <h1>Demo Gallery...</h1>
        </Slide>
      </div>

      <div className="d-block d-md-flex contact-outer"></div>
      <div className="text-center mt-5">
        <br></br>
        <h1>Taskiary</h1>
      </div>
      <MDBContainer>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/ZHs2ar87nNI"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
      </MDBContainer>
      <div className="text-center mt-5">
        <br></br>
        <h1>Lamina's Bakery</h1>
      </div>
      <MDBContainer>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/pBT6IJ4S0g4"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
      </MDBContainer>
    </div>
  );
}

export default Demo;
