import React from 'react';
import "./Footer.css";

function Footer() {
  return (
  
  <div className="footer-outer">
      


<footer>
<div className="footer-svg">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#273044"
            fill-opacity="1"
            d="M0,128L80,133.3C160,139,320,149,480,144C640,139,800,117,960,112C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
 </svg>
</div>
  <div className="container">
  
    <div className="row">
      
      <div className="col-lg-4 col-md-6">
        <h3>Site Map</h3>
        <ul className="list-unstyled three-column">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Code</li>
          <li>Design</li>
          <li>Host</li>
          <li>Contact</li>
          <li>Company</li>
        </ul>
        <ul className="list-unstyled socila-list">
          <li><img src="http://placehold.it/48x48" alt="" /></li>
          <li><img src="http://placehold.it/48x48" alt="" /></li>
          <li><img src="http://placehold.it/48x48" alt="" /></li>
          <li><img src="http://placehold.it/48x48" alt="" /></li>
          <li><img src="http://placehold.it/48x48" alt="" /></li>
          <li><img src="http://placehold.it/48x48" alt="" /></li>
        </ul>
      </div>
      
      <div className="col-lg-4 col-md-6">
        <h3>latest Articles</h3>
        <div className="media">
          <a href="#" className="pull-left">
            <img src="http://placehold.it/64x64" alt="" className="media-object" />
          </a>
          <div className="media-body">
            <h4 className="media-heading">Programming</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        
        <div className="media">
          <a href="#" className="pull-left">
            <img src="http://placehold.it/64x64" alt="" className="media-object" />
          </a>
          <div className="media-body">
            <h4 className="media-heading">Coding</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        
        <div className="media">
          <a href="#" className="pull-left">
            <img src="http://placehold.it/64x64" alt="" className="media-object" />
          </a>
          <div className="media-body">
            <h4 className="media-heading">Web Sesign</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        
      </div>
      
      <div className="col-lg-4">
        <h3>Our Work</h3>
        <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
        <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
        <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
        <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
      </div>
      
    </div>
  </div>
  <div className="copyright text-center">
    Copyright &copy; 2022 <span>Hamza Dev</span>
  </div>
</footer>

      
    </div>
  )
}

export default Footer