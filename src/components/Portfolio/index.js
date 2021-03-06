import React, { Component } from "react";

import PortfolioCard from "./PortfolioCard";

const projectsDone = [
  {
    projectName: "Buddy4Study's core website",
    projectLink: "https://www.buddy4study.com",
    dataDescription:
      "Developed and deployed some of the core features on www.buddy4study.com  a portal which connects scholarships with students"
  },
  {
    projectName: "Simon game built using jquery,html and css",
    projectLink: "https://codepen.io/abhinavthinktank/pen/RgmBjZ",
    dataDescription:
      " Developed and deployed Simon memory game using jquery, html and css."
  },
  {
    projectName: "Dungeon crawler game built using React.",
    projectLink: "https://react-dungeon-master.herokuapp.com/",
    dataDescription: "Dungeon crawler game built using React.js"
  },
  {
    projectName: "Simulation of game of life",
    projectLink: "https://codepen.io/abhinavthinktank/full/wqEPPN/",
    dataDescription:
      "Mathematical simulation of game of life built using React.js."
  },
  {
    projectName: "Minesweeper",
    projectLink: "https://codepen.io/abhinavthinktank/pen/yXLGRP",
    dataDescription: "Minesweeper game built using jQuery, html and css"
  },
  {
    projectName: "Recipe box",
    projectLink: "https://codepen.io/abhinavthinktank/pen/mMOjJb",
    dataDescription: "Recipe box built using React.js,"
  },
  {
    projectName: "Calculator",
    projectLink: "https://codepen.io/abhinavthinktank/pen/BZwBVy",
    dataDescription: "Calculator built using jquery html and css"
  },
  {
    projectName: "Scatter plot graph",
    projectLink: "https://codepen.io/abhinavthinktank/pen/XaGQBr",
    dataDescription: "Scatter plot graph built using D3.js"
  },
  {
    projectName: "Tic Tac Toe",
    projectLink: "https://codepen.io/abhinavthinktank/pen/XaGQBr",
    dataDescription: "Tic Tac Toe game built using jquery , CSS , HTML"
  },
  {
    projectName: "Meteor data world map",
    projectLink: "https://codepen.io/abhinavthinktank/full/EQQdgM/",
    dataDescription: "Meteorite data across the globe"
  },
  {
    projectName: "Force directed graph ",
    projectLink: "https://codepen.io/abhinavthinktank/pen/QQagQb",
    dataDescription: "Force directed graph showing nation contiguity"
  },
  {
    projectName: "Scatter plot graph",
    projectLink: "https://codepen.io/abhinavthinktank/pen/XaGQBr",
    dataDescription:
      "Scatter plot graph built on doping in professional bicycle racing"
  },
  {
    projectName: "React - drumkit",
    projectLink: "https://codepen.io/abhinavthinktank/pen/NOzjQz",
    dataDescription: "A drumkit built using React.js. "
  }
];

class PortfolioList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <div className="portfolio-grid-container">
        <h2>Some of the projects i have worked upon:</h2>
        {projectsDone.map((project, i) => (
          <PortfolioCard key={project + i} data={project} />
        ))}
      </div>
    );
  }
}

// const PortfolioList = props => (
//   <div className="portfolio-grid-container">
//     <h2>Some of the projects i have worked upon:</h2>
//     {projectsDone.map((project, i) => (
//       <PortfolioCard key={project + i} data={project} />
//     ))}
//   </div>
// );

export default PortfolioList;
