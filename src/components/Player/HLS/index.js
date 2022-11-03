import React from "react";
import ReactHlsPlayer from "react-hls-player";

export default function HLSPlayer() {
  return (
    <div>
      <ReactHlsPlayer
        src="https://livepeercdn.com/asset/6d7el73r1y12chxr/video"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />
    </div>
  );
}
