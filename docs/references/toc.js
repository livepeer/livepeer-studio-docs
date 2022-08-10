const toc = [
  "references/index",
    
  {
    type: "category",
    label: "Stream",
    collapsible: true,
    collapsed: true,
    items: [
      "references/stream/index",
      "references/stream/overview",
      "references/stream/post-stream",
      "references/stream/get-stream",
      "references/stream/list",
      "references/stream/record-on-off",
      "references/stream/update-stream",
      "references/stream/delete-stream",
    ],
  },
  {
    type: "category",
    label: "Session",
    collapsible: true,
    collapsed: true,
    items: [
      "references/session/index",
      "references/session/get-session",
      "references/session/list-sessions",
      "references/session/list-recorded-sessions",
    ],
  },
  {
    type: "category",
    label: "Multistream target",
    collapsible: true,
    collapsed: true,
    items: [
      "references/multistream-target/overview",
      "references/multistream-target/create-target",
      "references/multistream-target/get-target",
      "references/multistream-target/list-targets",
      "references/multistream-target/update-target",
      "references/multistream-target/delete-target",
    ],
  },
  {
    type: "category",
    label: "On Demand",
    collapsible: true,
    collapsed: true,
    items: [
      "references/vod/index",
      "references/vod/import",
      "references/vod/upload",
      "references/vod/list",
      "references/vod/list-tasks",
    ],
  },
  "references/support-references",
  "references/terminology",
  "references/protocols",
];

module.exports = toc;
