import React from 'react';
import './Footer.css';

function Footer() {
  return (
    
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
        <div className="container footer-inner">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h3>G. Hamza Choudhury</h3>
              <ul className="list-unstyled three-column">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="mailto:contact@gcteam.dev">Contact</a>
                </li>
                <li>
                  <a href="https://github.com/gcteamdev" target="_blank">
                    Code
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/devhamza/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com/Hamja188" target="_blank">
                    Design
                  </a>
                </li>
                <li>
                  <a href="https://www.effectivetogreat.com/" target="_blank">
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100077323763865"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    About
                  </a>
                </li>
              </ul>
              <ul className="list-unstyled socila-list">
                <li>
                  <img src="http://placehold.it/48x48" alt="" />
                </li>
                <li>
                  <img src="http://placehold.it/48x48" alt="" />
                </li>
                <li>
                  <img src="http://placehold.it/48x48" alt="" />
                </li>
                <li>
                  <img src="http://placehold.it/48x48" alt="" />
                </li>
                <li>
                  <img src="http://placehold.it/48x48" alt="" />
                </li>
                <li>
                  <img src="http://placehold.it/48x48" alt="" />
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <h3>Favourite quotes</h3>
              <div className="media">
                <a href="#" className="pull-left">
                  <img
                    src="http://placehold.it/64x64"
                    alt=""
                    className="media-object"
                  />
                </a>
                <div className="media-body">
                  <h4 className="media-heading">Life</h4>
                  <p>
                    "None is higher than the other unless he is higher in
                    virtue!" -Muhammad(PBUH)
                  </p>
                </div>
              </div>

              <div className="media">
                <a href="#" className="pull-left">
                  <img
                    src="http://placehold.it/64x64"
                    alt=""
                    className="media-object"
                  />
                </a>
                <div className="media-body">
                  <h4 className="media-heading">Coding</h4>
                  <p>
                    "If my mind can conceive it, if my heart can believe
                    it--then I can achieve it." -M. Ali
                  </p>
                </div>
              </div>

              <div className="media">
                <a href="#" className="pull-left">
                  <img
                    src="http://placehold.it/64x64"
                    alt=""
                    className="media-object"
                  />
                </a>
                <div className="media-body">
                  <h4 className="media-heading">Personal</h4>
                  <p>
                    "Everything has an easier equation, gotta find it" - Hamza
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <h3>My Work's</h3>
              <a href="https://github.com/gcteamdev" target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="copyright text-center">
          Designed & Developed By Hamza | Hosted on <span>Netlify</span>
        </div>
        <div className="copyright text-center">
          Copyright &copy; 2022 <span>Hamza Dev</span>
        </div>
      </footer>
 
  );
}

export default Footer;
