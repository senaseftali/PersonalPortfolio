import React from 'react';
// import logo from './logo.svg';
  import './About.css';
function About() {
  return (
    <div className="container">
           <section className="section-2" id="section-2">
        <h1 className="section-heading section-2-heading">About Me</h1>
        <div className="progress-bars-wrapper">
          <div className="progress-bar">
            <p className="progress-text">
              HTML
              <span></span>%
            </p>
            <div className="progress-percent"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              CSS
              <span></span>%
            </p>
            <div className="progress-percent"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              JavaScript
              <span></span>%
            </p>
            <div className="progress-percent"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              SASS
              <span></span>%
            </p>
            <div className="progress-percent"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              ReactJS
              <span></span>%
            </p>
            <div className="progress-percent"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              NodeJS
              <span></span>%
            </p>
            <div className="progress-percent"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              MongoDB
              <span></span>%
            </p>
            <div className="progress-percent"></div>
          </div>
        </div>
        <div className="services">
          <div className="service">
            <i className="far fa-lightbulb"></i>
            <h2 className="service-heading">Creative</h2>
          </div>
          <div className="service">
            <i className="fas fa-cut"></i>
            <h2 className="service-heading">Problem Solving</h2>
          </div>
          <div className="service">
            <i className="fas fa-tachometer-alt"></i>
            <h2 className="service-heading">Fast</h2>
          </div>
          <div className="service">
            <i className="fas fa-rocket"></i>
            <h2 className="service-heading">Dynamic</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
