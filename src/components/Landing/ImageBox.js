import React from "react";

const ImageBox = props => {
  const style = {
    maxWidth: "100%"
  };

  return (
    <div className="imageBox">
      <img style={style} src={props.url} />
    </div>
  );
};

export default ImageBox;
