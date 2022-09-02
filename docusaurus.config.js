// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const tabs = require("remark-docusaurus-tabs");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Livepeer Studio Docs",
  tagline:
    "Build creator-owned, live and on-demand video experiences with gateway access to the Livepeer API and a stunning user interface.",
  url: "https://docs.livepeer.studio",
  baseUrl: "/",
  // onBrokenLinks: "ignore",
  // onBrokenMarkdownLinks: "ignore",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "livepeer", // Usually your GitHub org/user name.
  projectName: "livepeer-studio", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [tabs],
          routeBasePath: "/",
          breadcrumbs: true,
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/livepeer/livepeer-studio-docs/blob/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia: {
      //   appId: "TIWEI9YB8Y",
      //   apiKey: "bee5caa76c6df12c16be24f2f04e7c7c",
      //   indexName: "2022-livepeer-org-docs",
      //   contextualSearch: true,
      // },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: "support_us",
        content:
          "⚠ The docs are undergoing a rewrite and are subject to change.",
        isCloseable: false,
      },
      navbar: {
        title: "",
        logo: {
          alt: "Livepeer Studio",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/quickstart",
            label: "Quickstart",
            position: "left",
          },
          // { to: "/concepts", label: "Concepts", position: "left" },
          {
            to: "/category/guides",
            position: "left",
            label: "Guides",
          },
          {
            to: "/category/api",
            label: "API Reference",
            position: "left",
          },
          {
            label: "Dashboard",
            href: "https://livepeer.studio/dashboard",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Quickstart",
                to: "/quickstart",
              },
              {
                label: "Guides",
                to: "/category/guides",
              },
              {
                label: "API Reference",
                to: "/category/api",
              },
            ],
          },
          {
            title: "Ecosystem",
            items: [
              {
                label: "Livepeer Studio",
                href: "https://livepeer.studio",
              },
              {
                label: "Livepeer.org",
                href: "https://livepeer.org",
              },
              {
                label: "Livepeer Explorer",
                href: "https://explorer.livepeer.org",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/7D6hGG6dCZ",
              },
              {
                label: "GitHub",
                href: "https://github.com/livepeer/studio",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/livepeerstudio",
              },
              {
                label: "Blog",
                href: "https://livepeer.studio/blog",
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
