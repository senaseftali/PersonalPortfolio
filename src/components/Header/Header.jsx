import React from 'react';
// import logo from './logo.svg';
  import './HomePage.css';
 import profil from './john-smith.jpg'; 
function Header() {
  return (
    <div className="container">
      <section className="section-1 center" id="section-1">
        <h1 className="section-1-heading">
          Web Developer
        </h1>
        <img src={profil} alt="John Smith" className="person-img" />
        <h3 className="person-name">John Smith</h3>
        <a href="#section-3" className="section-1-btn">Projects</a>
      </section>
    </div>
  );
}

export default Header;
