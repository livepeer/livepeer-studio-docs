const toc = [
  "intro",
  {
    type: "category",
    label: "About Livepeer Studio",
    link: { type: "doc", id: "aboutstudio/index" },
    collapsible: true,
    collapsed: true,
    items: [
      "aboutstudio/tech-overview",
      "aboutstudio/architecture",
      "aboutstudio/livestream",
      "aboutstudio/on-demand",
      "aboutstudio/mint",
      "aboutstudio/sampleapps",
      "aboutstudio/features",
      "references/terminology",
    ],
  },
  "guides/index",
  {
    type: "category",
    label: "Guides",
    link: { type: "doc", id: "guides/livestreaming/index" },
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: "category",
        label: "Livestreaming",
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
    ],
  },
  {
    type: "category",
    label: "API & Other References",
    link: { type: "doc", id: "references/index" },
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: "category",
        label: "Stream",
        collapsible: true,
        collapsed: true,
        items: [
          "references/stream/index",
          "references/stream/overview",
          "references/stream/post-stream",
          "references/stream/get-stream",
          "references/stream/list",
          "references/stream/record-on-off",
          "references/stream/update-stream",
          "references/stream/delete-stream",
        ],
      },
      {
        type: "category",
        label: "Session",
        collapsible: true,
        collapsed: true,
        items: [
          "references/session/index",
          "references/session/get-session",
          "references/session/list-sessions",
          "references/session/list-recorded-sessions",
        ],
      },
      {
        type: "category",
        label: "Multistream target",
        collapsible: true,
        collapsed: true,
        items: [
          "references/multistream-target/overview",
          "references/multistream-target/create-target",
          "references/multistream-target/get-target",
          "references/multistream-target/list-targets",
          "references/multistream-target/update-target",
          "references/multistream-target/delete-target",
        ],
      },
      {
        type: "category",
        label: "On Demand",
        collapsible: true,
        collapsed: true,
        items: [
          "references/vod/index",
          "references/vod/import",
          "references/vod/upload",
          "references/vod/list",
          "references/vod/export",
          "references/vod/list-tasks",
        ],
      },
      "references/support-references",
      "references/terminology",
      "references/protocols",
    ]
  }



]

module.exports = toc;