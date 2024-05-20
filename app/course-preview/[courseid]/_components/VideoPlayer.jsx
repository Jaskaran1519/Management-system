import React from "react";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className=" rounded-lg p-3">
      <video
        width="1000"
        height="500"
        controls
        controlsList="nodownload"
        className="rounded-lg"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
