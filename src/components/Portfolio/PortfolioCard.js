import React from 'react';

const PortfolioCard = props => (
  <div className="portfolio-card">
    <div>
      <a href={props.data.projectLink} target="_blank">
        {props.data.projectName}
      </a>
    </div>
    <hr />
    <p>{props.data.dataDescription}</p>
  </div>
);

export default PortfolioCard;
