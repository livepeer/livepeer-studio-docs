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
      "guides/livestreaming/metrics",
    ],
  },
      "guides/on-demand", 
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
  "references/terminology",
];

module.exports = toc;
