import React, { useRef } from "react";

import VideoJS from "./Player";

const App = () => {
  const playerRef = useRef(null);
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://livepeercdn.com/asset/6d7el73r1y12chxr/video",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
  };

  return <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />;
};

export default App;
