import React from 'react';
import "../App.css"

function Svg() {
  return (
    <div>
      {/*  ---svg wave--- */}
      <div className="vector">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FF012F"
            fill-opacity="0.7"
            d="M0,96L40,106.7C80,117,160,139,240,160C320,181,400,203,480,229.3C560,256,640,288,720,272C800,256,880,192,960,186.7C1040,181,1120,235,1200,229.3C1280,224,1360,160,1400,128L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="vector-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1a202c"
            fill-opacity="1"
            d="M0,288L40,272C80,256,160,224,240,176C320,128,400,64,480,69.3C560,75,640,149,720,170.7C800,192,880,160,960,170.7C1040,181,1120,235,1200,240C1280,245,1360,203,1400,181.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="vector-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#202735"
            fill-opacity="1"
            d="M0,128L80,133.3C160,139,320,149,480,144C640,139,800,117,960,112C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Svg;
