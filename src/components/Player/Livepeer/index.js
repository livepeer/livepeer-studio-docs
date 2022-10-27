import React from "react";
import { Player } from "@livepeer/react";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";

export default function index() {
  const client = createReactClient({
    provider: studioProvider({
      apiKey: "97f1716d-d1cd-4ebf-aa10-48d733b3f228",
    }),
  });

  const livepeerTheme = {
    colors: {
      accent: "rgb(0, 145, 255)",
      containerBorderColor: "rgba(0, 145, 255, 0.9)",
    },
    fonts: {
      display: "Inter",
    },
  };

  return (
    <LivepeerConfig client={client} theme={livepeerTheme}>
      <Player
        title="Agent 327: Operation Barbershop"
        showPipButton
        playbackId={"6d7el73r1y12chxr"}
      />
    </LivepeerConfig>
  );
}
