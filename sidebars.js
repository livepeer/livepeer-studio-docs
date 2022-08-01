/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mySidebar: [
    "quickstart/index",
    {
      type: "category",
      label: "Guides",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Live",
          collapsed: true,
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "04-guides/live",
            },
          ],
        },
        {
          type: "category",
          label: "On Demand",
          collapsed: true,
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "04-guides/on-demand",
            },
          ],
        },
        "guides/playback-a-video-stream",
        "guides/listen-for-webhooks",
        "guides/mint-a-video-nft",
      ],
    },
    {
      type: "category",
      label: "Reference",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "API",
          collapsed: false,
          link: {
            type: "generated-index",
          },
          items: [{ type: "autogenerated", dirName: "05-reference/api" }],
        },
        "reference/glossary",
        "reference/examples",
        "reference/support-matrix",
      ],
    },
  ],
};

module.exports = sidebars;
