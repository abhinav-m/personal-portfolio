import React, { Component } from "react";

import Title from "./Landing/Title.js";
import ImageBox from "./Landing/ImageBox.js";
import Description from "./Landing/Description.js";
import TechSkills from "./Landing/TechSkills.js";
import Contact from "./Landing/Contact.js";

class LandingPage extends Component {
  render() {
    const url = "https://s9.postimg.org/6pc2xr49r/display-pic.jpg";
    return (
      <div className="gridContainer">
        <Title />
        <ImageBox url={url} />
        <Description />
        <TechSkills />
        <Contact />
      </div>
    );
  }
}

export default LandingPage;
