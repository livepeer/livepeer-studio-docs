import React from "react";
import { Box } from "@livepeer/design-system";

function Card({ title, description, icon }) {
  return (
    <Box
      css={{
        display: "flex",
        minWidth: "150px",
        px: "$4",
        flexDirection: "column",
        pt: "$4",
        pb: "$3",
        cursor: "pointer",
        borderRadius: "20px",
        border: "1px solid var(--ifm-color-emphasis-200)",
        boxShadow: "0px 6px 10px rgb(0 0 0 / 5%)",
        backgroundColor: "#ffffff10",
        backdropFilter: "blur(10px)",
        height: "100%",
      }}>
      <Box css={{ fontSize: "$7", mb: "$1" }}>{icon}</Box>
      <Box>
        <h3>{title}</h3>
        <p>{description}</p>
      </Box>
    </Box>
  );
}

export default Card;
