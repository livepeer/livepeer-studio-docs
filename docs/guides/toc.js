const toc = [
  "guides/index",
  {
    type: "category",
    label: "Livestreaming",
    link: { type: "doc", id: "guides/livestreaming/index" },
    collapsible: true,
    collapsed: true,
    items: [
      "guides/livestreaming/tutorial",
      "guides/livestreaming/obs",
      "guides/livestreaming/webrtmp",
      "guides/livestreaming/livestream-api",
      "guides/livestreaming/api-key",
      "guides/livestreaming/broadcasting",
      "guides/livestreaming/verify",
      "guides/livestreaming/create-a-stream",
      "guides/livestreaming/playback",
      "guides/livestreaming/record",
      "guides/livestreaming/cdn",
      "guides/livestreaming/webhook",
      "guides/livestreaming/check-webhook-signatures",
      "guides/livestreaming/multistream",
      "guides/livestreaming/back-up-transcoding",
      "guides/livestreaming/reducing-latency",
      "guides/livestreaming/handling-disconnects",
      "guides/livestreaming/support-matrix",
      "guides/livestreaming/srt-support",
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
    items: ["guides/mint-guides/mint-a-video-nft", "guides/mint-guides/build-a-video-nft-app"],
  },
  {
    type: "category",
    label: "Upload",
    link: { type: "doc", id: "guides/upload-guides/upload-guides" },
    collapsible: true,
    collapsed: true,
    items: [
      "guides/upload-guides/upload-guides",

    ],
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
