import React from "react";
import { Box, Container } from "@livepeer/design-system";
import Link from "@docusaurus/Link";
import Card from "@site/src/components/Card";

const FeatureList = [
  {
    title: "Quickstart",
    link: "/quickstart",
    description: <>Steps to get started with Livepeer Studio.</>,
    icon: "⏱",
  },
  // {
  //   title: "Concepts",
  //   link: "/concepts",
  //   description: (
  //     <>
  //       Big-picture explanations of higher-level Livepeer concepts. Most useful
  //       for building understanding of a particular topic.
  //     </>
  //   ),
  //   icon: "💡",
  // },
  {
    title: "Guides",
    link: "category/guides/",
    description: <>Practical step-by-step guides and interactive examples.</>,
    icon: "📚",
  },
  {
    title: "API Reference",
    link: "/category/api",
    description: <>Learn how to use the standard Livepeer API.</>,
    icon: "🗂",
  },
];

export default function HomepageFeatures() {
  return (
    <Container size="3">
      <Box
        css={{
          display: "grid",
          gap: 20,
          mb: 60,
          pb: 20,
          a: {
            transform: "translateY(0px)",
            transition: ".2s",
            color: "initial",
          },
          "a:hover": {
            transform: "translateY(-2px)",
            transition: ".2s",
            textDecoration: "none",
          },
          "@bp2": {
            gridAutoFlow: "column dense",
            gridTemplateRows: "33% 33 33%",
          },
        }}>
        {FeatureList.map((props, idx) => (
          <Link
            style={{ minHeight: "180px", color: "inherit" }}
            to={props.link}>
            <Card key={idx} {...props} />
          </Link>
        ))}
      </Box>
    </Container>
  );
}
