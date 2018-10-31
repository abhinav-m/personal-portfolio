import React from "react";

const ImageBox = props => {
  const style = {
    minHeight: "200px",
    width: "200px",
    borderRadius: "5px"
  };

  return (
    <div className="imageBox">
      <img style={style} src={props.url} />
    </div>
  );
};

export default ImageBox;
