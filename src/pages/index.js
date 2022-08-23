import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { Box, Container } from "@livepeer/design-system";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Box css={{ my: "$5" }}>
      <Container size="3">
        <Box
          css={{
            pb: "$5",
            borderBottom: "1px solid var(--ifm-navbar-shadow)",
          }}>
          <Box
            css={{
              fontSize: "$8",
              fontWeight: "bold",
              letterSpacing: "-1px",
              mb: "$1",
              pt: "$6",
            }}>
            Your Gateway to Livepeer Development
          </Box>
          <Box css={{ mb: "$3", maxWidth: 800 }}>{siteConfig.tagline}</Box>

          {/* <Box>
            <Link
              className="button button--secondary"
              to="/what-is-livepeer-studio">
              What is Livepeer Studio? →
            </Link>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
}

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
