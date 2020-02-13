import React from "react";

function Video({ url, title, width, height }) {
  return (
    <div>
      <iframe
        src={url}
        title={title}
        width={width}
        height={height}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
