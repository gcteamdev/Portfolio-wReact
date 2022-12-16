import React from 'react';
import './Demo.css';
import { MDBContainer } from "mdb-react-ui-kit";
/* https://mdbootstrap.com/docs/react/extended/video/ */
function Demo() {
  return (
    <div className="Demo-page" id="WebApp">
      <div className="d-block d-md-flex contact-outer"></div>
      <MDBContainer>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/ZHs2ar87nNI"
          title="YouTube video"
          allowfullscreen
        ></iframe>
      </div>
    </MDBContainer>
    



    </div>
  );
}

export default Demo;
