const guidesToc = require("./docs/guides/toc");
const referencesToc = require("./docs/references/toc");
const studioToc = require("./docs/studio101/toc");
// const quickstartToc = require("./docs/guides/toc");

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  studio101: studioToc,
  quickstart: guidesToc,
  guides: guidesToc,
  referencesToc: referencesToc,
};

module.exports = sidebars;
