
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','cb2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','3c7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','8bf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','f4e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','9b5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','6f5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','8f7'),
    exact: true
  },
  {
    path: '/landing-page',
    component: ComponentCreator('/landing-page','2b9'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','ccb'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','fcf'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','ddc'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','546'),
        exact: true
      },
      {
        path: '/buidl-quick-start/',
        component: ComponentCreator('/buidl-quick-start/','daa'),
        exact: true,
        sidebar: "buidl"
      },
      {
        path: '/buidl-quick-start/browser-stream',
        component: ComponentCreator('/buidl-quick-start/browser-stream','7a0'),
        exact: true,
        sidebar: "buidl"
      },
      {
        path: '/buidl-quick-start/create-stream',
        component: ComponentCreator('/buidl-quick-start/create-stream','d11'),
        exact: true
      },
      {
        path: '/buidl-quick-start/first-app',
        component: ComponentCreator('/buidl-quick-start/first-app','72e'),
        exact: true,
        sidebar: "buidl"
      },
      {
        path: '/buidl-quick-start/first-stream',
        component: ComponentCreator('/buidl-quick-start/first-stream','aba'),
        exact: true,
        sidebar: "buidl"
      },
      {
        path: '/buidl-quick-start/obs-stream',
        component: ComponentCreator('/buidl-quick-start/obs-stream','25f'),
        exact: true,
        sidebar: "buidl"
      },
      {
        path: '/buidl-quick-start/playback',
        component: ComponentCreator('/buidl-quick-start/playback','d32'),
        exact: true,
        sidebar: "buidl"
      },
      {
        path: '/guides/',
        component: ComponentCreator('/guides/','8e7'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/api',
        component: ComponentCreator('/guides/api','b2a'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/development/',
        component: ComponentCreator('/guides/development/','1d8'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/development/custom-domain',
        component: ComponentCreator('/guides/development/custom-domain','a1b'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/development/example-app',
        component: ComponentCreator('/guides/development/example-app','3b0'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/development/live-streaming-from-your-app',
        component: ComponentCreator('/guides/development/live-streaming-from-your-app','de0'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/development/per-stream-metrics',
        component: ComponentCreator('/guides/development/per-stream-metrics','91d'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/development/video-playback-in-your-app',
        component: ComponentCreator('/guides/development/video-playback-in-your-app','474'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/',
        component: ComponentCreator('/guides/livestreaming/','f9e'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/api-key',
        component: ComponentCreator('/guides/livestreaming/api-key','f64'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/back-up-transcoding',
        component: ComponentCreator('/guides/livestreaming/back-up-transcoding','5fb'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/broadcasting',
        component: ComponentCreator('/guides/livestreaming/broadcasting','829'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/cdn',
        component: ComponentCreator('/guides/livestreaming/cdn','958'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/check-webhook-signatures',
        component: ComponentCreator('/guides/livestreaming/check-webhook-signatures','42a'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/create-a-stream',
        component: ComponentCreator('/guides/livestreaming/create-a-stream','a10'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/create-paywall',
        component: ComponentCreator('/guides/livestreaming/create-paywall','09c'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/debug-live-stream-issues',
        component: ComponentCreator('/guides/livestreaming/debug-live-stream-issues','f3c'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/handling-disconnects',
        component: ComponentCreator('/guides/livestreaming/handling-disconnects','52a'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/monitoring-stream-health',
        component: ComponentCreator('/guides/livestreaming/monitoring-stream-health','ecd'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/multistream',
        component: ComponentCreator('/guides/livestreaming/multistream','017'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/playback',
        component: ComponentCreator('/guides/livestreaming/playback','5d3'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/record',
        component: ComponentCreator('/guides/livestreaming/record','e90'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/reducing-latency',
        component: ComponentCreator('/guides/livestreaming/reducing-latency','98f'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/srt-support',
        component: ComponentCreator('/guides/livestreaming/srt-support','288'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/support-matrix',
        component: ComponentCreator('/guides/livestreaming/support-matrix','947'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/tutorial',
        component: ComponentCreator('/guides/livestreaming/tutorial','ffe'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/verify',
        component: ComponentCreator('/guides/livestreaming/verify','012'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/livestreaming/webhook',
        component: ComponentCreator('/guides/livestreaming/webhook','0b1'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/nft/',
        component: ComponentCreator('/guides/nft/','45b'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/nft/build-a-video-nft-app',
        component: ComponentCreator('/guides/nft/build-a-video-nft-app','cbf'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/nft/mint-a-video-nft',
        component: ComponentCreator('/guides/nft/mint-a-video-nft','e82'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/guides/usage-billing',
        component: ComponentCreator('/guides/usage-billing','8de'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/references/',
        component: ComponentCreator('/references/','9f0'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/api-key',
        component: ComponentCreator('/references/api-key','cff'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/authentication',
        component: ComponentCreator('/references/authentication','e56'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/errors',
        component: ComponentCreator('/references/errors','598'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/ingest',
        component: ComponentCreator('/references/ingest','7e9'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/multistream-target/',
        component: ComponentCreator('/references/multistream-target/','c62'),
        exact: true
      },
      {
        path: '/references/multistream-target/create-target',
        component: ComponentCreator('/references/multistream-target/create-target','3e7'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/multistream-target/delete-target',
        component: ComponentCreator('/references/multistream-target/delete-target','6d5'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/multistream-target/get-target',
        component: ComponentCreator('/references/multistream-target/get-target','164'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/multistream-target/list-targets',
        component: ComponentCreator('/references/multistream-target/list-targets','5a6'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/multistream-target/overview',
        component: ComponentCreator('/references/multistream-target/overview','3fd'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/multistream-target/update-target',
        component: ComponentCreator('/references/multistream-target/update-target','61b'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/session/',
        component: ComponentCreator('/references/session/','3d2'),
        exact: true
      },
      {
        path: '/references/session/get-session',
        component: ComponentCreator('/references/session/get-session','745'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/session/list-recorded-sessions',
        component: ComponentCreator('/references/session/list-recorded-sessions','a37'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/session/list-sessions',
        component: ComponentCreator('/references/session/list-sessions','265'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/session/overview',
        component: ComponentCreator('/references/session/overview','81d'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/stream/',
        component: ComponentCreator('/references/stream/','35c'),
        exact: true
      },
      {
        path: '/references/stream/delete-stream',
        component: ComponentCreator('/references/stream/delete-stream','0b8'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/stream/get-stream',
        component: ComponentCreator('/references/stream/get-stream','666'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/stream/list',
        component: ComponentCreator('/references/stream/list','99c'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/stream/overview',
        component: ComponentCreator('/references/stream/overview','3d7'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/stream/post-stream',
        component: ComponentCreator('/references/stream/post-stream','e8e'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/stream/record-on-off',
        component: ComponentCreator('/references/stream/record-on-off','63d'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/stream/update-stream',
        component: ComponentCreator('/references/stream/update-stream','66d'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/vod/',
        component: ComponentCreator('/references/vod/','c95'),
        exact: true
      },
      {
        path: '/references/vod/export',
        component: ComponentCreator('/references/vod/export','9cf'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/vod/import',
        component: ComponentCreator('/references/vod/import','3be'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/vod/list',
        component: ComponentCreator('/references/vod/list','cbe'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/vod/list-tasks',
        component: ComponentCreator('/references/vod/list-tasks','b54'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/references/vod/upload',
        component: ComponentCreator('/references/vod/upload','731'),
        exact: true,
        sidebar: "referencesToc"
      },
      {
        path: '/studio101/',
        component: ComponentCreator('/studio101/','e9d'),
        exact: true,
        sidebar: "studio101"
      },
      {
        path: '/terminology',
        component: ComponentCreator('/terminology','6b7'),
        exact: true,
        sidebar: "referencesToc"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
