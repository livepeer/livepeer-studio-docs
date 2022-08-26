import React from "react";
import { useLocation } from "@docusaurus/router";
import { Box } from "@livepeer/design-system";
import Link from "@docusaurus/Link";

function TabbedPages({ pages }) {
  // React router provides the current component's route, even in SSR
  const location = useLocation();
  const slugs = location.pathname.split("/");
  const activePage = slugs[slugs.length - 1];

  return (
    <Box css={{ mb: "$4" }}>
      {pages.map(({ slug, title }) => {
        return (
          <Box
            as={Link}
            key={slug}
            to={slug}
            css={{
              color:
                activePage === slug
                  ? "var(--ifm-tabs-color-active)"
                  : "var(--ifm-tabs-color)",
              fontWeight: 600,
              "&:hover": {
                textDecoration: "none",
              },
            }}
            className={`tabs__item tabItem_node_modules-@docusaurus-theme-classic-lib-theme-Tabs-styles-module ${
              activePage === slug && "tabs__item--active"
            }`}>
            {title}
          </Box>
        );
      })}
    </Box>
  );
}

export default TabbedPages;
