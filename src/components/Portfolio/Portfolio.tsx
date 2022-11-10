
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

import data from './Link.json';
import { kMaxLength } from 'buffer';
function Portfolio() {
  return (
    <div className="container">
      <section className="section-3" id="section-3">
        <h1 className="section-heading section-3-heading">My Projects</h1>
        <div className="projects-wrapper center">

          {data.map((x) => {
            return (
              <div className="project" key={x.id}>
                <div className="project-text">
                  <h2 className="project-name">{x.projeName}</h2>
                  <h4 className="project-technologies">{x.technologName}</h4>
                </div>
                <img src={x.images} className="project-img" />
                <a
                  href={x.link}
                  className="project-link"
                  target="_blank"
                >{x.buttondescription}</a
                >
              </div>
            );
          })};

        </div>
      </section>
    </div>
  );
}

export default Portfolio;
