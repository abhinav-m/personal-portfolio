import React from 'react';
import { Link } from 'react-router-dom';

import ProjectsList from '../Portfolio';

const Projects = () => {
  return (
    <div className="projects">
      <h3>Projects</h3>
      <hr />
      <p>
        I have worked on a multitude of web projects, some of them being DATA
        visualization projects, web applications and full stack projects.
      </p>
      <Link to="/portfolio">
        <p>PORTFOLIO</p>
      </Link>
    </div>
  );
};

export default Projects;
