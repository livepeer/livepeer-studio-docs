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
      "guides/livestreaming/broadcasting",
      "guides/livestreaming/verify",
      "guides/livestreaming/create-a-stream",
      "guides/livestreaming/playback",
      "guides/livestreaming/record",
      "guides/livestreaming/multistream",
      "guides/livestreaming/back-up-transcoding",
      "guides/livestreaming/webhook",
      "guides/livestreaming/metrics",
    ],
  },
  {
    type: "category",
    label: "On Demand",
    link: { type: "doc", id: "guides/on-demand/index" },
    collapsible: true,
    collapsed: true,
    items: [
             "guides/on-demand/on-demand-guide",

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
  "guides/sampleslib",
];

module.exports = toc;
