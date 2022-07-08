// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Livepeer Studio",
  tagline: "The world's open video infrastructure",
  url: "https://livepeer.org",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/favicon.ico",
  organizationName: "livepeer",
  projectName: "docs",
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          breadcrumbs: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/livepeer/docs/blob/main",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-111259858-1",
          anonymizeIP: true,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "TIWEI9YB8Y",
        apiKey: "bee5caa76c6df12c16be24f2f04e7c7c",
        indexName: "2022-livepeer-org-docs",
        contextualSearch: true,
      },
      navbar: {
        logo: {
          alt: "Livepeer Studio Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "/aboutstudio",
            label: "About Studio",
            position: "left",
          },
          {
            href: "/guides",
            label: "Quickstart",
            position: "left",
          },
          {
            href: "/guides/livestreaming/",
            label: "Guides",
            position: "left",
          },
          {
            href: "/references",
            label: "API",
            position: "left",
          },
          {
            href: "https://forum.livepeer.com/",
            label: "Forum",
            position: "right",
          },
          {
            href: "https://livepeer.studio",
            label: "Follow us",
            position: "right",
          },
          {
            href: "https://livepeer.studio",
            label: "Support",
            position: "right",
          },
          {
            href: "https://livepeer.studio/dashboard",
            label: "Dashboard",
            position: "right",
          },
        ],
      },
      colorMode: {
        defaultMode: "dark",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
