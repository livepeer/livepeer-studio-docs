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
            "aboutstudio/mint" ,
            "aboutstudio/sampleapps",
            "aboutstudio/features",
            "references/terminology",
        ],
      },
      "guides/index",
      {
        type: "category",
        label: "Guides",
        link: { type: "doc", id: "guides/livestreaming" },
        collapsible: true,
        collapsed: true,
        items: [
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
      }
]

module.exports = toc;