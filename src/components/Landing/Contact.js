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
        <a
          href="https://www.linkedin.com/in/abhinav-mishra-78228a119/"
          target="_blank"
        >
          <i style={style} className="fab fa-linkedin" />
        </a>

        <a href="https://github.com/abhinav-m" target="_blank">
          <i style={{ color: "black" }} className="fab fa-github-square" />
        </a>

        <a href="https://codepen.io/abhinavthinktank/" target="_blank">
          <i style={{ color: "black" }} className="fab fa-codepen" />
        </a>
      </div>
      <p> {contactInfo}</p>
    </div>
  );
};

export default Contact;
