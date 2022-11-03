
import './Portfolio.css';
 import project1 from '../../images/project-1.jpg'; 
 import project2 from '../../images/project-2.jpg'; 
 import project3 from '../../images/project-3.jpg'; 
 import project4 from '../../images/project-4.jpg'; 
 import project5 from '../../images/project-5.jpg'; 
 import project6 from '../../images/project-6.jpg'; 
 import project7 from '../../images/project-7.jpg'; 
 import project8 from '../../images/project-8.jpg'; 
 import project9 from '../../images/project-9.jpg'; 

function Portfolio() {
  return (
    <div className="container">
       <section className="section-3" id="section-3">
        <h1 className="section-heading section-3-heading">My Projects</h1>
        <div className="projects-wrapper center">
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">architect website</h2>
              <h4 className="project-technologies">HTML / CSS / JS</h4>
            </div>
            <img src={project1} className="project-img" />
            <a
              href="https://www.youtube.com/watch?v=3J-EFMzz94g"
              className="project-link"
              target="_blank"
              >Go to Video</a
            >
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">Budget App</h2>
              <h4 className="project-technologies">ReactJS</h4>
            </div>
            <img src={project2} className="project-img" />
            <a
              href="https://www.youtube.com/watch?v=fDffQYs2WB0"
              className="project-link"
              target="_blank"
              >Go to Video</a
            >
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">wine house</h2>
              <h4 className="project-technologies">HTML / CSS / JS</h4>
            </div>
            <img src={project3} className="project-img" />
            <a
              href="https://www.youtube.com/watch?v=jtmuopTpzGE"
              className="project-link"
              target="_blank"
              >Go to Video</a
            >
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">task manager</h2>
              <h4 className="project-technologies">ReactJS</h4>
            </div>
            <img src={project4} className="project-img" />
            <a
              href="https://www.youtube.com/watch?v=fqup-BL3VjI"
              className="project-link"
              target="_blank"
              >Go to Video</a
            >
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">The Road</h2>
              <h4 className="project-technologies">HTML / CSS / JS</h4>
            </div>
            <img src={project5} className="project-img" />
            <a
              href="https://www.youtube.com/watch?v=qmyN7lYY_xo"
              className="project-link"
              target="_blank"
              >Go to Video</a
            >
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">food recipe app</h2>
              <h4 className="project-technologies">ReactJS</h4>
            </div>
            <img src={project6} className="project-img" />
            <a
              href="https://www.youtube.com/watch?v=d1vT4kkTCaw"
              className="project-link"
              target="_blank"
              >Go to Video</a
            >
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">slideshow</h2>
              <h4 className="project-technologies">HTML / CSS / JS</h4>
            </div>
            <img src={project7} className="project-img" />
            <a
              href="https://www.youtube.com/watch?v=1qhSSp2q7n4"
              className="project-link"
              target="_blank"
              >Go to Video</a
            >
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">Hamburger menu</h2>
              <h4 className="project-technologies">HTML / CSS / JS</h4>
            </div>
            <img src={project8} className="project-img" />
            <a
              href="https://www.youtube.com/watch?v=9Q7wy8r3i8w"
              className="project-link"
              target="_blank"
              >Go to Video</a
            >
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">CSS grid menu</h2>
              <h4 className="project-technologies">HTML / CSS / JS</h4>
            </div>
            <img src={project9} className="project-img" />
            <a href="" className="project-link" target="_blank">Go to Video</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
