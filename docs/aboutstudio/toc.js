const toc = [
  "aboutstudio/index",
  "aboutstudio/tech-overview",
  "aboutstudio/architecture",
  "aboutstudio/features",
  "aboutstudio/sampleapps",
  {
    type: "category",
    label: "Livestream",
    link: { type: "doc", id: "aboutstudio/livestream/index" },
    collapsible: true,
    collapsed: true,
    items: ["aboutstudio/livestream/index"],
  },
  {
    type: "category",
    label: "On Demand ",
    link: { type: "doc", id: "aboutstudio/on-demand/index" },
    collapsible: true,
    collapsed: true,
    items: ["aboutstudio/on-demand/index"],
 },
 {
    type: "category",
    label: "Mint",
    link: { type: "doc", id: "aboutstudio/mint/index" },
    collapsible: true,
    collapsed: true,
    items: ["aboutstudio/mint/index"],
  },
  "references/terminology",
];

module.exports = toc;
