import React from "react";

export default function IframePlayer() {
  return (
    <iframe
      src="https://lvpr.tv?v=6d7el73r1y12chxr"
      frameborder="0"
      width={"100%"}
      height={530}
      allowfullscreen
      allow="autoplay; encrypted-media; picture-in-picture"
      sandbox="allow-scripts"
    />
  );
}
