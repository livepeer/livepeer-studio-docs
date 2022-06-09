/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Livepeer Docs",
  "tagline": "The world's open video infrastructure",
  "url": "https://livepeer.org",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "livepeer",
  "projectName": "docs",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "breadcrumbs": true,
          "sidebarPath": "/Users/shih-yuhwang/Desktop/livepeer-studio-docs/sidebars.js",
          "editUrl": "https://github.com/livepeer/docs/blob/main"
        },
        "blog": false,
        "theme": {
          "customCss": "/Users/shih-yuhwang/Desktop/livepeer-studio-docs/src/css/custom.css"
        },
        "googleAnalytics": {
          "trackingID": "UA-111259858-1",
          "anonymizeIP": true
        }
      }
    ]
  ],
  "themeConfig": {
    "algolia": {
      "appId": "TIWEI9YB8Y",
      "apiKey": "bee5caa76c6df12c16be24f2f04e7c7c",
      "indexName": "2022-livepeer-org-docs",
      "contextualSearch": true,
      "searchParameters": {},
      "searchPagePath": "search"
    },
    "navbar": {
      "title": "Livepeer Docs",
      "logo": {
        "alt": "Livepeer Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "href": "/studio101",
          "label": "Studio 101",
          "position": "left"
        },
        {
          "href": "/quick-start",
          "label": "Quick Start",
          "position": "left"
        },
        {
          "href": "/guides",
          "label": "Guides",
          "position": "left"
        },
        {
          "href": "/references",
          "label": "API",
          "position": "right"
        },
        {
          "href": "https://forum.livepeer.com/",
          "label": "Forum",
          "position": "right"
        },
        {
          "href": "https://livepeer.com",
          "label": "Follow us",
          "position": "right"
        },
        {
          "href": "https://livepeer.com",
          "label": "Support",
          "position": "right"
        },
        {
          "href": "https://livepeer.com/dashboard",
          "label": "Dashboard",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "Discord",
              "href": "https://discord.gg/uaPhtyrWsF"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/LivepeerOrg"
            },
            {
              "label": "Blog",
              "href": "https://medium.com/livepeer-blog"
            },
            {
              "label": "Forum",
              "href": "https://forum.livepeer.org/"
            },
            {
              "label": "Reddit",
              "href": "https://www.reddit.com/r/livepeer/"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 Livepeer, Inc."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
    "hideableSidebar": false,
    "autoCollapseSidebarCategories": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "scripts": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false
};
