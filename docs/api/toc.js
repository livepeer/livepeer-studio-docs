const toc = [
  "api/index",
  {
    type: "category",
    label: "Stream",
    collapsible: true,
    collapsed: true,
    items: [
      "api/stream/overview",
      "api/stream/post-stream",
      "api/stream/get-stream",
      "api/stream/list",
      "api/stream/record-on-off",
      "api/stream/update-stream",
      "api/stream/delete-stream",
    ],
  },
  {
    type: "category",
    label: "Session",
    collapsible: true,
    collapsed: true,
    items: [
      "api/session/overview",
      "api/session/get-session",
      "api/session/list-sessions",
      "api/session/list-recorded-sessions",
    ],
  },
  {
    type: "category",
    label: "Multistream target",
    collapsible: true,
    collapsed: true,
    items: [
      "api/multistream-target/overview",
      "api/multistream-target/create-target",
      "api/multistream-target/get-target",
      "api/multistream-target/list-targets",
      "api/multistream-target/update-target",
      "api/multistream-target/delete-target",
    ],
  },
  {
    type: "category",
    label: "Video On Demand",
    collapsible: true,
    collapsed: true,
    items: [
      "api/vod/import",
      "api/vod/upload",
      "api/vod/list",
      "api/vod/export",
      "api/vod/list-tasks",
    ],
  },
  "api/ingest",
  "api/authentication",
  "api/errors",
  "api/api-key",
  "api/terminology",
];

module.exports = toc;
