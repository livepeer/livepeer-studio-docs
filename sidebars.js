const guidesToc = require("./docs/guides/toc");
const referencesToc = require("./docs/references/toc");
const aboutstudioToc = require("./docs/aboutstudio/toc");
const welcomeToc = require('./docs/toc');
// const quickstartToc = require("./docs/guides/toc");

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  welcome: welcomeToc,
  aboutstudio: aboutstudioToc,
  quickstart: guidesToc,
  guides: guidesToc,
  referencesToc: referencesToc,
};

module.exports = sidebars;
