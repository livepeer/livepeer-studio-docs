const toc = [
  "guides/index",
  {
    type: "category",
    label: "Livestreaming",
    link: { type: "doc", id: "guides/livestreaming/index" },
    collapsible: true,
    collapsed: true,
    items: [
      "guides/livestreaming/api-key",
      "guides/livestreaming/tutorial",
      "guides/livestreaming/obs",
      "guides/livestreaming/webrtmp",
      "guides/livestreaming/create-a-stream",
      "guides/livestreaming/broadcasting",
      "guides/livestreaming/verify",
      "guides/livestreaming/playback",
      "guides/livestreaming/create-a-stream",
      "guides/livestreaming/record",
      "guides/livestreaming/multistream",
      "guides/livestreaming/verify",
      "guides/livestreaming/broadcasting",
      "guides/livestreaming/webhook",
    ],
  },
  {
    type: "category",
    label: "Application Development",
    link: { type: "doc", id: "guides/development/index" },
    collapsible: true,
    collapsed: true,
    items: [
      "guides/development/live-streaming-from-your-app",
      "guides/development/video-playback-in-your-app",
      "guides/development/metrics"
    ],
  },
  {
    type: "category",
    label: "Mint",
    link: { type: "doc", id: "guides/mint-guides/index" },
    collapsible: true,
    collapsed: true,
    items: [
            "guides/mint-guides/mint-a-video-nft", 
            "guides/mint-guides/build-a-video-nft-app"],
  },
  {
    type: "category",
    label: "On Demand",
    link: { type: "doc", id: "guides/on-demand-guides/index" },
    collapsible: true,
    collapsed: true,
    items: ["guides/on-demand-guides/index"],
  },
  {
    type: "category",
    label: "Sample Apps Library",
    link: { type: "doc", id: "guides/sampleslib/index" },
    collapsible: true,
    collapsed: true,
    items: ["guides/sampleslib/index"],
  },
  "guides/usage-billing",
  "references/terminology",
];

module.exports = toc;
