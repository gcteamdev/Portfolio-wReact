import React from 'react';
import './Aboutme.css';
import { MDBContainer } from "mdb-react-ui-kit";
/* https://mdbootstrap.com/docs/react/extended/video/ */
function AboutMe() {
  return (
    <div className="aboutme-page" id="RNapp">
      <div className="d-block d-md-flex contact-outer"></div>
      <MDBContainer>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/zRFpqIPd254"
          title="YouTube video"
          allowfullscreen
        ></iframe>
      </div>
    </MDBContainer>
    



    </div>
  );
}

export default AboutMe;
