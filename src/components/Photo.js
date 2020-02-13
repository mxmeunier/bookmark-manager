import React from "react";

function Photo({ url, title, width, height }) {
  return (
    <div>
      <img src={url} alt={title} width={width} height={height}></img>
    </div>
  );
}

export default Photo;
