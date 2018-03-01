import React from "react";
const Contact = () => {
  const style = {
    color: "blue"
  };

  const contactInfo = "You can also send me an email @ abhinav_m@hotmail.com";

  return (
    <div className="socialIcons">
      <h3>Contact me</h3>
      <hr />
      <div className="icons">
        <i style={style} className="fab fa-linkedin" />
        <i className="fab fa-github-square" />
        <i className="fab fa-codepen" />
      </div>
      <p> {contactInfo}</p>
    </div>
  );
};

export default Contact;
