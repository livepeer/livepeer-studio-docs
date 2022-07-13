const guidesToc = require("./docs/guides/toc");
const referencesToc = require("./docs/references/toc");
const coreConceptsToc = require("./docs/core-concepts/toc");
const welcomeToc = require("./docs/toc");
// const quickstartToc = require("./docs/guides/toc");
// const glossaryToc = require("./docs/references/toc");

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  welcome: welcomeToc,
  "core-concepts": coreConceptsToc,
  quickstart: guidesToc,
  guides: guidesToc,
  referencesToc: referencesToc,
  terminology: referencesToc,
};

module.exports = sidebars;
