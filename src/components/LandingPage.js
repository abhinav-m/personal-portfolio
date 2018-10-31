import React, { Component } from "react";
import { Link } from "react-router-dom";

import Title from "./Landing/Title.js";
import ImageBox from "./Landing/ImageBox.js";
import Description from "./Landing/Description.js";
import TechSkills from "./Landing/TechSkills.js";
import Contact from "./Landing/Contact.js";
import Projects from "./Landing/Project";

class LandingPage extends Component {
  render() {
    const url =
      "https://preview.ibb.co/jaXtY0/Whats-App-Image-2017-06-11-at-11-19-34-AM.jpg";
    return (
      <div className="gridContainer">
        <Title />
        <ImageBox url={url} />
        <Description />
        <Projects />
        <TechSkills />
        <Contact />
      </div>
    );
  }
}

export default LandingPage;
