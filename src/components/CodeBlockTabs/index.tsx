import React from "react";
import Tabs from "@theme/Tabs";
import { Box } from "@livepeer/design-system";

const CodeBlockTabs = ({ children }) => {
  return (
    <Box
      css={{
        "[role=tabpanel]": { mt: "-1rem" },
        ".tabs-container": {
          mb: 0,
        },
        border: "1px solid var(--ifm-toc-border-color)",
        borderRadius: "0.4rem",
        '[role="tab"]': {
          py: "$2",
          px: "$3",
        },
        marginBottom: "1rem",
      }}>
      <Tabs>{children}</Tabs>
    </Box>
  );
};

export default CodeBlockTabs;
