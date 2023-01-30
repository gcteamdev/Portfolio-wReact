import React, {useState} from 'react';
import './PERN.css';
import orca from '../../assets/OrcaLocatorDesktop.png';

function PERNstack() {
    const [colorChange, setColorchange] = useState(false);
    const changeBgColor = () =>{
        if(window.scrollY >= 900){
          setColorchange(true);
        }
        else{
          setColorchange(false);
        }
     };
     window.addEventListener('scroll', changeBgColor);
  return (
    <div className= "PERNpage">
      <div className="projectCtn">
        <h1 className="projects">PROJECTS...</h1>
      </div>
      <div className= {colorChange ? 'orcaProjWrapper' : 'BgColorChange'}>
        <img className="orcaImg" src={orca} alt="orca" />
        <div>
          <h1 className="orcaProjecth1">
            {' '}
            <span className="orcaH1Span">ORCA Locator</span> <br></br>a
            Full-Stack(PERN) Web app!
          </h1>
          <h5 className="OrcatechStack">Tech Stack: PostgreSQL | Node.JS | Express | React</h5>
        </div>
      </div>
    </div>
  );
}

export default PERNstack;
