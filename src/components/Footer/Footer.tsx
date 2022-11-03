import React from 'react';
// import logo from './logo.svg';
  import './Footer.css';
//  import profil from './john-smith.jpg'; 
function Footer() {
  return (
    <div className="container">
      <footer className="section-5 center">
        <div className="social-media">
          <a href="#none" className="social-media-link">
            <i className="fab fa-github-square"></i>
          </a>
          <a href="#none" className="social-media-link">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#none" className="social-media-link">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="#none" className="social-media-link">
            <i className="fab fa-instagram-square"></i>
          </a>
        </div>
        <p className="copyright">
          Copyright &copy; CodeAndCreate. All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
