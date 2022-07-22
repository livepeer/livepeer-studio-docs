---
title: On Demand Guide
---

This guide provides information and instructions for working with the On Demand feature to upload videos and play them back in your application:

- Understanding the On Demand API
- Working with assets
- Methods for Uploading
- Updating assets
- Monitoring assets

## What you need to Know

- Understanding Livepeer Studio [core concepts](/core-concepts)
- Experience working with Javascript
- Working with video assets

## On Demand Capabilities

On Demand uploading includes:

| Capabilities | Description  |
| ------------ | ------------ |
|  Import assets  | An asset provided in a downloadable link is sent to the Livepeer Network for transcoding and saved in storage. | 
|  Upload assets  | A direct upload URL is generated and the asset provided in the `.mp4` file format is sent to the Livepeer Network for transcoding and saved in storage.  | 
|  Get assets | Retrieves a specific asset or list of assets with provided information such as `playbackUrl`, `playbackId`, and `downloadUrl` | 
|  Get tasks | Retrieves a specific task or a list of tasks associated with an asset and provides information such as `type`, `status`, and `params` | 

To learn more on using the Livestream feature, follow the [Uploading guide](../../guides/on-demand-guides/) or the [Upload API Reference](../../references/vod/upload) for more detailed instructions.


## Technical Preparation

Before getting started, you will need to meet the following dependencies for working with the [On Demand](/aboutstudio/on-demand/) feature:

- [A Livepeer Studio account](https://livepeer.studio/login)
- Install [`Node.js`](https://nodejs.org/en/)
- Access to the [API](/references) Reference
- An [API Key](/guides/livestreaming/api-key) to call the VOD API.

> **Note:** Calling the API from the frontend requires an [API key with CORS access allowed](/guides/livestreaming/api-key).

## About the On Demand API

The Video-on-Demand (VOD) API allows you to send video files to Livepeer and get them ready for optimized playback.

Those videos can be provided either by you (static content) or your users, given your application offers an interface for them to do so.

## Asset Resources

When adding a video file, this is an asynchronous process that requires processing the file. Here are resources for this process:

## Listing the assets

Once an asset is uploaded `/request-upload`, the response will return the `id` of that asset.


### Request

`/request-upload`

### Response

the response will return the `id` of that asset

## Retrieve the Status of the Asset

### Request

`GET /api/asset/$ASSET_ID`

### Response

The response will indicate the status of the uploaded assets as status:

- `waiting` or `status`: "ready".

- If status: "waiting" is returned in the response, the asset is not available:

  - make the API call again until status: "ready".

- If the status indicates that it is "ready", it is available.

## Listing the Tasks

To check the status on an asset imported /import to Livepeer or exported /export to IPFS, get the `task.id` from the response of the uploaded asset.

### Request

To retrieve the status use:

`GET /api/task/$TASK_ID`

## To Monitor progress of the task

If the asset is available,

- the response will return `status.phase.complete`,

otherwise

- the value will be `status.phase.pending`.

- The API call will need to be made again until it is complete.

> **Note:** using the `GET /api/task/$TASK_ID` request provides different information depending on whether the asset is _imported_ or _exported_ .

### For imported assets

- Information on video specs such as codec and formats are present.

### For assets exported to IPFS

- The response will provide information such as the `metadat` and `CID`.

## Methods for Uploading Video

There are two methods to upload a video to Livepeer:

- Upload via URL
- Upload locally with an `.mp4` file format

## Upload via URL

When using the upload via URL method:

- Provide the name of the asset
- Provide the URL of the asset that should be imported

### Request

```js

const axios = require('axios');
const fs = require('fs');

var url = "https://example.com";

const importAsset = async () => {

const response = await axios.post("https://livepeer.studio/api/asset/import", {
  headers: {
    'Authorization': `Bearer ${process.env.LP_API_KEY}`,
    'Content-Type': 'application/json'
  },
    data: JSON.stringify({
      "url": "$EXTERNAL_URL",
      "name": "Example name"
      })
    }
  });
   console.log(JSON.stringify(response.data))
};
```

### Response

The status here is pending, it might take a few minutes for it to be imported.

```json
{
  "asset": {
    "id": "87289307-b60f-432b-984a-8ede174fa152",
    "playbackId": "8728n2iaziowj67d",
    "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
    "createdAt": 1652894665364,
    "status": "waiting",
    "name": "Waterfall"
  },
  "task": {
    "id": "77588656-ab08-4dd2-a244-0ff8df7ce664",
    "createdAt": 1652894665451,
    "type": "import",
    "outputAssetId": "87289307-b60f-432b-984a-8ede174fa152",
    "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
    "params": {
      "import": {
        "url": "https://www.pexels.com/video/6394054/download/"
      }
    },
    "status": {
      "phase": "pending",
      "updatedAt": 1652894665451
    }
  }
}
```

## Verify that the status is ready

### Request

Use `https://livepeer.studio/api/asset/$ASSET_ID/` with the provided `asset.id` in the response above.

### Response

```json
{
  "id": "87289307-b60f-432b-984a-8ede174fa152",
  "hash": [
    {
      "hash": "6dad0a8e7a92d537c6305fe6ae1e1881",
      "algorithm": "md5"
    },
    {
      "hash": "6132f4e43472b56b4047b7ad018147056c0c2dba9306cd04504e9c8208e72257",
      "algorithm": "sha256"
    }
  ],
  "name": "Waterfall",
  "size": 32407849,
  "status": "ready",
  "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
  "createdAt": 1652894665364,
  "updatedAt": 1652894675275,
  "videoSpec": {
    "format": "mp4",
    "tracks": [
      {
        "fps": 23.976023976023978,
        "type": "video",
        "codec": "h264",
        "width": 4096,
        "height": 2048,
        "bitrate": 21324821,
        "duration": 12.011667,
        "pixelFormat": "yuv420p"
      },
      {
        "type": "audio",
        "codec": "aac",
        "bitrate": 253375,
        "channels": 2,
        "duration": 12.031667,
        "sampleRate": 48000
      }
    ],
    "duration": 12.031667
  },
  "playbackId": "8728n2iaziowj67d",
  "playbackUrl": "https://livepeercdn.com/recordings/e605988e-e8d3-4e14-b5b0-10b01ff94a8b/index.m3u8",
  "downloadUrl": "https://livepeercdn.com/asset/8728n2iaziowj67d/video"
}
```

## Upload Locally

The upload locally method includes a two-step process:

- Only `MP4` files encoded with `H.264` and `AAC` are supported

- Files are currently limited to 1GB in size. Any files greater than that will likely error out during the upload or processing steps

1. Generate the URL to upload assets

### Request

```js
const uploadAsset = async () => {
  const response = await axios.post(
    "https://livepeer.studio/api/asset/request-upload",
    {
      headers: {
        Authorization: `Bearer ${process.env.LP_API_KEY}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        name: "Example name",
      }),
    }
  );
  console.log(JSON.stringify(response.data));
};
```

### Response

```json
{
  "url": "https://origin.livepeer.studio/api/asset/upload/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVzaWduZWRVcmwiOiJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vbHAtdXMtdm9kLWNvbS9kaXJlY3RVcGxvYWQvNGMyMWs3ejJ0amNkZzh3dC9zb3VyY2U_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ29udGVudC1TaGEyNTY9VU5TSUdORUQtUEFZTE9BRCZYLUFtei1DcmVkZW50aWFsPUdPT0cxRVlVTldOVjZSWUlLNTQySFdBM1JMN1JCN0pVT0VRM1lMMjNRWUI2Q0hQRzVITzJRQzMzTUpWVVklMkYyMDIyMDUxOCUyRnVzJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIyMDUxOFQxOTIyMDVaJlgtQW16LUV4cGlyZXM9OTAwJlgtQW16LVNpZ25hdHVyZT0wZWJmNmMwNWFlZTA2ZGVhOGZmM2U1MzNmNjMxZjk1ZTY3M2I4ZWRiOTI3MWJlOWQzYjdhZWQ4YjI1YTUzZTM3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZ4LWlkPVB1dE9iamVjdCIsImF1ZCI6Imh0dHBzOi8vbGl2ZXBlZXIuY29tIiwiaWF0IjoxNjUyOTAxNzI1fQ.2wSQMC3s6QFFkmyhQZuecbQF2R8E_j3VGTg9tblc0Dc",
  "asset": {
    "id": "4c21895e-2488-4c0a-9377-3369ff586ddd",
    "playbackId": "4c21k7z2tjcdg8wt",
    "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
    "createdAt": 1652901725324,
    "status": "waiting",
    "name": "Waterfall"
  },
  "task": {
    "id": "58a9b4dc-89d8-40f5-8372-cacaec49024b",
    "createdAt": 1652901725741,
    "type": "import",
    "outputAssetId": "4c21895e-2488-4c0a-9377-3369ff586ddd",
    "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
    "params": {
      "import": {
        "uploadedObjectKey": "directUpload/4c21k7z2tjcdg8wt/source"
      }
    },
    "status": {
      "phase": "pending",
      "updatedAt": 1652901725741
    }
  }
}
```

2. Upload the asset to the generated URL

Get the “url”: “https://origin.livepeer.studio/api/assets/…“ from the response.

Check the status of the generated url.

https://livepeer.studio/api/asset/$ASSET_ID/ with provided asset.id

### Request

```js
{
  "id": "4c21895e-2488-4c0a-9377-3369ff586ddd",
  "name": "Waterfall",
  "status": "waiting",
  "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
  "createdAt": 1652895834393,
  "playbackId": "4c21k7z2tjcdg8wt"
}
```

### Upload the video

### Request

```js

const uploadAsset = async () => {

const response = await axios
  .put("${url}", {
    headers: {
      Authorization: `Bearer ${process.env.LP_API_KEY}`
      "Content-Type": "video/mp4"
    },
    data: fs.createReadStream(path)
  });
    console.log(JSON.stringify(response.data));
  };
```

### Response

When the video is uploaded, the result should return a 200 response

```json
{
  "id": "4c21895e-2488-4c0a-9377-3369ff586ddd",
  "hash": [
    {
      "hash": "6dad0a8e7a92d537c6305fe6ae1e1881",
      "algorithm": "md5"
    },
    {
      "hash": "6132f4e43472b56b4047b7ad018147056c0c2dba9306cd04504e9c8208e72257",
      "algorithm": "sha256"
    }
  ],
  "name": "Waterfall",
  "size": 32407849,
  "status": "ready",
  "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
  "createdAt": 1652901725324,
  "updatedAt": 1652901778931,
  "videoSpec": {
    "format": "mp4",
    "tracks": [
      {
        "fps": 23.976023976023978,
        "type": "video",
        "codec": "h264",
        "width": 4096,
        "height": 2048,
        "bitrate": 21324821,
        "duration": 12.011667,
        "pixelFormat": "yuv420p"
      },
      {
        "type": "audio",
        "codec": "aac",
        "bitrate": 253375,
        "channels": 2,
        "duration": 12.031667,
        "sampleRate": 48000
      }
    ],
    "duration": 12.031667
  },
  "playbackId": "4c21k7z2tjcdg8wt",
  "playbackUrl": "https://livepeercdn.com/recordings/54aeff83-404c-490a-9afa-99296a932401/index.m3u8",
  "downloadUrl": "https://livepeercdn.com/asset/4c21k7z2tjcdg8wt/video"
}
```

## List Assets

When listing assets, look for the status in the response body, it should return status:“ready”. If the response returns status:“waiting”, then wait a little longer and repeat this step until the status is ready before moving to the exporting step.

### Request

```js
const listAsset = async () => {
  const response = await axios.get("https://livepeer.studio/api/asset", {
    headers: {
      Authorization: `Bearer ${process.env.LP_API_KEY}`,
    },
  });
  console.log(JSON.stringify(response.data));
};
```

### Response

The response will return information on the uploaded asset including the video spec, the playbackUrl for the uploaded asset as well as the playbackId.

```json
[
  {
    // Uploaded asset locally
    "id": "4c21895e-2488-4c0a-9377-3369ff586ddd",
    "hash": [
      {
        "hash": "6dad0a8e7a92d537c6305fe6ae1e1881",
        "algorithm": "md5"
      },
      {
        "hash": "6132f4e43472b56b4047b7ad018147056c0c2dba9306cd04504e9c8208e72257",
        "algorithm": "sha256"
      }
    ],
    "name": "Waterfall",
    "size": 32407849,
    "status": "ready",
    "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
    "createdAt": 1652901725324,
    "updatedAt": 1652901778931,
    "videoSpec": {
      "format": "mp4",
      "tracks": [
        {
          "fps": 23.976023976023978,
          "type": "video",
          "codec": "h264",
          "width": 4096,
          "height": 2048,
          "bitrate": 21324821,
          "duration": 12.011667,
          "pixelFormat": "yuv420p"
        },
        {
          "type": "audio",
          "codec": "aac",
          "bitrate": 253375,
          "channels": 2,
          "duration": 12.031667,
          "sampleRate": 48000
        }
      ],
      "duration": 12.031667
    },
    "playbackId": "4c21k7z2tjcdg8wt",
    "playbackUrl": "https://livepeercdn.com/recordings/54aeff83-404c-490a-9afa-99296a932401/index.m3u8",
    "downloadUrl": "https://livepeercdn.com/asset/4c21k7z2tjcdg8wt/video"
  },
  {
    //Uploaded asset via URL
    "id": "87289307-b60f-432b-984a-8ede174fa152",
    "hash": [
      {
        "hash": "6dad0a8e7a92d537c6305fe6ae1e1881",
        "algorithm": "md5"
      },
      {
        "hash": "6132f4e43472b56b4047b7ad018147056c0c2dba9306cd04504e9c8208e72257",
        "algorithm": "sha256"
      }
    ],
    "name": "Waterfall",
    "size": 32407849,
    "status": "ready",
    "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
    "createdAt": 1652894665364,
    "updatedAt": 1652894675275,
    "videoSpec": {
      "format": "mp4",
      "tracks": [
        {
          "fps": 23.976023976023978,
          "type": "video",
          "codec": "h264",
          "width": 4096,
          "height": 2048,
          "bitrate": 21324821,
          "duration": 12.011667,
          "pixelFormat": "yuv420p"
        },
        {
          "type": "audio",
          "codec": "aac",
          "bitrate": 253375,
          "channels": 2,
          "duration": 12.031667,
          "sampleRate": 48000
        }
      ],
      "duration": 12.031667
    },
    "playbackId": "8728n2iaziowj67d",
    "playbackUrl": "https://livepeercdn.com/recordings/e605988e-e8d3-4e14-b5b0-10b01ff94a8b/index.m3u8",
    "downloadUrl": "https://livepeercdn.com/asset/8728n2iaziowj67d/video"
  }
]
```

## Update an asset

When updating an asset, make sure to have the asset.id available. The asset ID is provided in the response when an asset is uploaded.

### Request

```js
const updateAsset = async () => {
  const response = await axios.patch(
    "https://livepeer.studio/api/asset/$ASSET_ID",
    {
      headers: {
        Authorization: `Bearer ${process.env.LP_API_KEY}`,
        "Content-Type": "application/json",
      },
      data: JSON.strinify({
        name: "Example name",
      }),
    }
  );
  console.log(JSON.stringify(response.data));
};
```

### Response

```json
{
  "id": "4c21895e-2488-4c0a-9377-3369ff586ddd",
  "hash": [
    {
      "hash": "6dad0a8e7a92d537c6305fe6ae1e1881",
      "algorithm": "md5"
    },
    {
      "hash": "6132f4e43472b56b4047b7ad018147056c0c2dba9306cd04504e9c8208e72257",
      "algorithm": "sha256"
    }
  ],
  "name": "New waterfall",
  "size": 32407849,
  "status": {
    "phase": "ready",
    "updatedAt": 1652901778931
  },
  "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
  "createdAt": 1652901725324,
  "updatedAt": 1652901778931,
  "videoSpec": {
    "format": "mp4",
    "tracks": [
      {
        "fps": 23.976023976023978,
        "type": "video",
        "codec": "h264",
        "width": 4096,
        "height": 2048,
        "bitrate": 21324821,
        "duration": 12.011667,
        "pixelFormat": "yuv420p"
      },
      {
        "type": "audio",
        "codec": "aac",
        "bitrate": 253375,
        "channels": 2,
        "duration": 12.031667,
        "sampleRate": 48000
      }
    ],
    "duration": 12.031667
  },
  "playbackId": "4c21k7z2tjcdg8wt",
  "playbackUrl": "https://livepeercdn.com/recordings/54aeff83-404c-490a-9afa-99296a932401/index.m3u8",
  "downloadUrl": "https://livepeercdn.com/asset/4c21k7z2tjcdg8wt/video"
}
```

## Delete an asset

### Request

```js
const deleteAsset = async () => {
  const response = await axios.delete(
    "https://livepeer.studio/api/asset/{id}",
    {
      headers: {
        Authorization: `Bearer ${process.env.LP_API_KEY}`,
      },
    }
  );
  JSON.stringify(response.data);
};
```

### Response

When the asset has been successfully deleted, the response should return a 204

## Export an asset to IPFS

This method allows for exporting an asset imported or uploaded from Livepeer to IPFS.

### Request

Provide the $ASSET_ID of the asset, this can be found using the List Asset method.

```js
const exportAsset = async () => {
  const response = await axios.post(
    "https://livepeer.studio/api/asset/$ASSET_ID/export",
    {
      headers: {
        Authorization: `Bearer ${process.env.LP_API_KEY}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        ipfs: {},
      }),
    }
  );
  console.log(JSON.stringify(res.data));
};
```

### Response

The this example has the response show that the status is pending.

```json
{
  "task": {
    "id": "8b0cd796-8be1-412b-b1dc-8251a35ad2e7",
    "createdAt": 1652903903963,
    "type": "export",
    "inputAssetId": "87289307-b60f-432b-984a-8ede174fa152",
    "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
    "params": {
      "export": {
        "ipfs": {}
      }
    },
    "status": {
      "phase": "pending",
      "updatedAt": 1652903903963
    }
  }
}
Check back with https://livepeer.studio/api/task/$TASK_ID to get the status update.

{
  "id": "8b0cd796-8be1-412b-b1dc-8251a35ad2e7",
  "type": "export",
  "output": {
    "export": {
      "ipfs": {
        "videoFileCid": "QmaMvRNEwvCHuwEZjX9NzFTJtBUrbk7j5D7ngP8xATHwXK",
        "nftMetadataCid": "QmaY8HqYV3kVxwsCQahMYisQiZnjZg2bRVjb6XspTmYMFi",
        "videoFileUrl": "ipfs://QmaMvRNEwvCHuwEZjX9NzFTJtBUrbk7j5D7ngP8xATHwXK",
        "videoFileGatewayUrl": "https://ipfs.livepeer.studio/ipfs/QmaMvRNEwvCHuwEZjX9NzFTJtBUrbk7j5D7ngP8xATHwXK",
        "nftMetadataUrl": "ipfs://QmaY8HqYV3kVxwsCQahMYisQiZnjZg2bRVjb6XspTmYMFi",
        "nftMetadataGatewayUrl": "https://ipfs.livepeer.studio/ipfs/QmaY8HqYV3kVxwsCQahMYisQiZnjZg2bRVjb6XspTmYMFi"
      }
    }
  },
  "params": {
    "export": {
      "ipfs": {}
    }
  },
  "status": {
    "phase": "completed",
    "updatedAt": 1652903908984
  },
  "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
  "createdAt": 1652903903963,
  "inputAssetId": "87289307-b60f-432b-984a-8ede174fa152"
}
```

## List Tasks

When listing tasks, the response will provide information on imported or exported information on the asset.

### Request

Use the list tasks method to get CID and metadata.

To get the CID and metadata URL for the created asset, retrieve the task until it is completed. To do this, check the status field in the response.

```js


const list Task = async () => {

const response = await axios
  .get("https://livepeer.studio/api/task/$TASK_ID", {
    headers: {
      Authorization: `Bearer ${process.env.LP_API_KEY}`,
    },
  })
    console.log(JSON.stringify(response.data));
};
```

### Response

This finished task will have an output with all the information about that asset.

- The `CID` information is located under the `output.export.ipfs` path.
=======
---
title: On Demand Guide
---

This guide provides information and instructions for working with the On Demand feature to upload videos and play them back in your application:

- Understanding the On Demand API
- Working with assets
- Methods for Uploading
- Updating assets
- Monitoring assets

## What you need to Know

- Understanding Livepeer Studio [core concepts](/core-concepts)
- Experience working with Javascript
- Working with video assets

## On Demand Capabilities

On Demand uploading includes:

| Capabilities | Description  |
| ------------ | ------------ |
|  Import assets  | An asset provided in a downloadable link is sent to the Livepeer Network for transcoding and saved in storage. | 
|  Upload assets  | A direct upload URL is generated and the asset provided in the `.mp4` file format is sent to the Livepeer Network for transcoding and saved in storage.  | 
|  Get assets | Retrieves a specific asset or list of assets with provided information such as `playbackUrl`, `playbackId`, and `downloadUrl` | 
|  Get tasks | Retrieves a specific task or a list of tasks associated with an asset and provides information such as `type`, `status`, and `params` | 

To learn more on using the Livestream feature, follow the [Uploading guide](../../guides/on-demand-guides/) or the [Upload API Reference](../../references/vod/upload) for more detailed instructions.


## Technical Preparation

Before getting started, you will need to meet the following dependencies for working with the [On Demand](/aboutstudio/on-demand/) feature:

- [A Livepeer Studio account](https://livepeer.studio/login)
- Install [`Node.js`](https://nodejs.org/en/)
- Access to the [API](/references) Reference
- An [API Key](/guides/livestreaming/api-key) to call the VOD API.

> **Note:** Calling the API from the frontend requires an [API key with CORS access allowed](/guides/livestreaming/api-key).

## About the On Demand API

The Video-on-Demand (VOD) API allows you to send video files to Livepeer and get them ready for optimized playback.

Those videos can be provided either by you (static content) or your users, given your application offers an interface for them to do so.

## Asset Resources

When adding a video file, this is an asynchronous process that requires processing the file. Here are resources for this process:

## Listing the assets

Once an asset is uploaded `/request-upload`, the response will return the `id` of that asset.


### Request

`/request-upload`

### Response

the response will return the `id` of that asset

## Retrieve the Status of the Asset

### Request

`GET /api/asset/$ASSET_ID`

### Response

The response will indicate the status of the uploaded assets as status:

- `waiting` or `status`: "ready".

- If status: "waiting" is returned in the response, the asset is not available:

  - make the API call again until status: "ready".

- If the status indicates that it is "ready", it is available.

## Listing the Tasks

To check the status on an asset imported /import to Livepeer or exported /export to IPFS, get the `task.id` from the response of the uploaded asset.

### Request

To retrieve the status use:

`GET /api/task/$TASK_ID`

## To Monitor progress of the task

If the asset is available,

- the response will return `status.phase.complete`,

otherwise

- the value will be `status.phase.pending`.

- The API call will need to be made again until it is complete.

> **Note:** using the `GET /api/task/$TASK_ID` request provides different information depending on whether the asset is _imported_ or _exported_ .

### For imported assets

- Information on video specs such as codec and formats are present.

### For assets exported to IPFS

- The response will provide information such as the `metadat` and `CID`.

## Methods for Uploading Video

There are two methods to upload a video to Livepeer:

- Upload via URL
- Upload locally with an `.mp4` file format

## Upload via URL

When using the upload via URL method:

- Provide the name of the asset
- Provide the URL of the asset that should be imported

### Request

```js

const axios = require('axios');
const fs = require('fs');

var url = "https://example.com";

const importAsset = async () => {

const response = await axios.post("https://livepeer.studio/api/asset/import", {
  headers: {
    'Authorization': `Bearer ${process.env.LP_API_KEY}`,
    'Content-Type': 'application/json'
  },
    data: JSON.stringify({
      "url": "$EXTERNAL_URL",
      "name": "Example name"
      })
    }
  });
   console.log(JSON.stringify(response.data))
};
```

### Response

The status here is pending, it might take a few minutes for it to be imported.

```json
{
  "asset": {
    "id": "87289307-b60f-432b-984a-8ede174fa152",
    "playbackId": "8728n2iaziowj67d",
    "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
    "createdAt": 1652894665364,
    "status": "waiting",
    "name": "Waterfall"
  },
  "task": {
    "id": "77588656-ab08-4dd2-a244-0ff8df7ce664",
    "createdAt": 1652894665451,
    "type": "import",
    "outputAssetId": "87289307-b60f-432b-984a-8ede174fa152",
    "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
    "params": {
      "import": {
        "url": "https://www.pexels.com/video/6394054/download/"
      }
    },
    "status": {
      "phase": "pending",
      "updatedAt": 1652894665451
    }
  }
}
```

## Verify that the status is ready

### Request

Use `https://livepeer.studio/api/asset/$ASSET_ID/` with the provided `asset.id` in the response above.

### Response

```json
{
  "id": "87289307-b60f-432b-984a-8ede174fa152",
  "hash": [
    {
      "hash": "6dad0a8e7a92d537c6305fe6ae1e1881",
      "algorithm": "md5"
    },
    {
      "hash": "6132f4e43472b56b4047b7ad018147056c0c2dba9306cd04504e9c8208e72257",
      "algorithm": "sha256"
    }
  ],
  "name": "Waterfall",
  "size": 32407849,
  "status": "ready",
  "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
  "createdAt": 1652894665364,
  "updatedAt": 1652894675275,
  "videoSpec": {
    "format": "mp4",
    "tracks": [
      {
        "fps": 23.976023976023978,
        "type": "video",
        "codec": "h264",
        "width": 4096,
        "height": 2048,
        "bitrate": 21324821,
        "duration": 12.011667,
        "pixelFormat": "yuv420p"
      },
      {
        "type": "audio",
        "codec": "aac",
        "bitrate": 253375,
        "channels": 2,
        "duration": 12.031667,
        "sampleRate": 48000
      }
    ],
    "duration": 12.031667
  },
  "playbackId": "8728n2iaziowj67d",
  "playbackUrl": "https://livepeercdn.com/recordings/e605988e-e8d3-4e14-b5b0-10b01ff94a8b/index.m3u8",
  "downloadUrl": "https://livepeercdn.com/asset/8728n2iaziowj67d/video"
}
```

## Upload Locally

The upload locally method includes a two-step process:

- Only `MP4` files encoded with `H.264` and `AAC` are supported

- Files are currently limited to 1GB in size. Any files greater than that will likely error out during the upload or processing steps

1. Generate the URL to upload assets

### Request

```js
const uploadAsset = async () => {
  const response = await axios.post(
    "https://livepeer.studio/api/asset/request-upload",
    {
      headers: {
        Authorization: `Bearer ${process.env.LP_API_KEY}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        name: "Example name",
      }),
    }
  );
  console.log(JSON.stringify(response.data));
};
```

### Response

```json
{
  "url": "https://origin.livepeer.studio/api/asset/upload/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVzaWduZWRVcmwiOiJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vbHAtdXMtdm9kLWNvbS9kaXJlY3RVcGxvYWQvNGMyMWs3ejJ0amNkZzh3dC9zb3VyY2U_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ29udGVudC1TaGEyNTY9VU5TSUdORUQtUEFZTE9BRCZYLUFtei1DcmVkZW50aWFsPUdPT0cxRVlVTldOVjZSWUlLNTQySFdBM1JMN1JCN0pVT0VRM1lMMjNRWUI2Q0hQRzVITzJRQzMzTUpWVVklMkYyMDIyMDUxOCUyRnVzJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIyMDUxOFQxOTIyMDVaJlgtQW16LUV4cGlyZXM9OTAwJlgtQW16LVNpZ25hdHVyZT0wZWJmNmMwNWFlZTA2ZGVhOGZmM2U1MzNmNjMxZjk1ZTY3M2I4ZWRiOTI3MWJlOWQzYjdhZWQ4YjI1YTUzZTM3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZ4LWlkPVB1dE9iamVjdCIsImF1ZCI6Imh0dHBzOi8vbGl2ZXBlZXIuY29tIiwiaWF0IjoxNjUyOTAxNzI1fQ.2wSQMC3s6QFFkmyhQZuecbQF2R8E_j3VGTg9tblc0Dc",
  "asset": {
    "id": "4c21895e-2488-4c0a-9377-3369ff586ddd",
    "playbackId": "4c21k7z2tjcdg8wt",
    "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
    "createdAt": 1652901725324,
    "status": "waiting",
    "name": "Waterfall"
  },
  "task": {
    "id": "58a9b4dc-89d8-40f5-8372-cacaec49024b",
    "createdAt": 1652901725741,
    "type": "import",
    "outputAssetId": "4c21895e-2488-4c0a-9377-3369ff586ddd",
    "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
    "params": {
      "import": {
        "uploadedObjectKey": "directUpload/4c21k7z2tjcdg8wt/source"
      }
    },
    "status": {
      "phase": "pending",
      "updatedAt": 1652901725741
    }
  }
}
```

2. Upload the asset to the generated URL

Get the “url”: “https://origin.livepeer.studio/api/assets/…“ from the response.

Check the status of the generated url.

https://livepeer.studio/api/asset/$ASSET_ID/ with provided asset.id

### Request

```js
{
  "id": "4c21895e-2488-4c0a-9377-3369ff586ddd",
  "name": "Waterfall",
  "status": "waiting",
  "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
  "createdAt": 1652895834393,
  "playbackId": "4c21k7z2tjcdg8wt"
}
```

### Upload the video

### Request

```js

const uploadAsset = async () => {

const response = await axios
  .put("${url}", {
    headers: {
      Authorization: `Bearer ${process.env.LP_API_KEY}`
      "Content-Type": "video/mp4"
    },
    data: fs.createReadStream(path)
  });
    console.log(JSON.stringify(response.data));
  };
```

### Response

When the video is uploaded, the result should return a 200 response

```json
{
  "id": "4c21895e-2488-4c0a-9377-3369ff586ddd",
  "hash": [
    {
      "hash": "6dad0a8e7a92d537c6305fe6ae1e1881",
      "algorithm": "md5"
    },
    {
      "hash": "6132f4e43472b56b4047b7ad018147056c0c2dba9306cd04504e9c8208e72257",
      "algorithm": "sha256"
    }
  ],
  "name": "Waterfall",
  "size": 32407849,
  "status": "ready",
  "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
  "createdAt": 1652901725324,
  "updatedAt": 1652901778931,
  "videoSpec": {
    "format": "mp4",
    "tracks": [
      {
        "fps": 23.976023976023978,
        "type": "video",
        "codec": "h264",
        "width": 4096,
        "height": 2048,
        "bitrate": 21324821,
        "duration": 12.011667,
        "pixelFormat": "yuv420p"
      },
      {
        "type": "audio",
        "codec": "aac",
        "bitrate": 253375,
        "channels": 2,
        "duration": 12.031667,
        "sampleRate": 48000
      }
    ],
    "duration": 12.031667
  },
  "playbackId": "4c21k7z2tjcdg8wt",
  "playbackUrl": "https://livepeercdn.com/recordings/54aeff83-404c-490a-9afa-99296a932401/index.m3u8",
  "downloadUrl": "https://livepeercdn.com/asset/4c21k7z2tjcdg8wt/video"
}
```

## List Assets

When listing assets, look for the status in the response body, it should return status:“ready”. If the response returns status:“waiting”, then wait a little longer and repeat this step until the status is ready before moving to the exporting step.

### Request

```js
const listAsset = async () => {
  const response = await axios.get("https://livepeer.studio/api/asset", {
    headers: {
      Authorization: `Bearer ${process.env.LP_API_KEY}`,
    },
  });
  console.log(JSON.stringify(response.data));
};
```

### Response

The response will return information on the uploaded asset including the video spec, the playbackUrl for the uploaded asset as well as the playbackId.

```json
[
  {
    // Uploaded asset locally
    "id": "4c21895e-2488-4c0a-9377-3369ff586ddd",
    "hash": [
      {
        "hash": "6dad0a8e7a92d537c6305fe6ae1e1881",
        "algorithm": "md5"
      },
      {
        "hash": "6132f4e43472b56b4047b7ad018147056c0c2dba9306cd04504e9c8208e72257",
        "algorithm": "sha256"
      }
    ],
    "name": "Waterfall",
    "size": 32407849,
    "status": "ready",
    "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
    "createdAt": 1652901725324,
    "updatedAt": 1652901778931,
    "videoSpec": {
      "format": "mp4",
      "tracks": [
        {
          "fps": 23.976023976023978,
          "type": "video",
          "codec": "h264",
          "width": 4096,
          "height": 2048,
          "bitrate": 21324821,
          "duration": 12.011667,
          "pixelFormat": "yuv420p"
        },
        {
          "type": "audio",
          "codec": "aac",
          "bitrate": 253375,
          "channels": 2,
          "duration": 12.031667,
          "sampleRate": 48000
        }
      ],
      "duration": 12.031667
    },
    "playbackId": "4c21k7z2tjcdg8wt",
    "playbackUrl": "https://livepeercdn.com/recordings/54aeff83-404c-490a-9afa-99296a932401/index.m3u8",
    "downloadUrl": "https://livepeercdn.com/asset/4c21k7z2tjcdg8wt/video"
  },
  {
    //Uploaded asset via URL
    "id": "87289307-b60f-432b-984a-8ede174fa152",
    "hash": [
      {
        "hash": "6dad0a8e7a92d537c6305fe6ae1e1881",
        "algorithm": "md5"
      },
      {
        "hash": "6132f4e43472b56b4047b7ad018147056c0c2dba9306cd04504e9c8208e72257",
        "algorithm": "sha256"
      }
    ],
    "name": "Waterfall",
    "size": 32407849,
    "status": "ready",
    "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
    "createdAt": 1652894665364,
    "updatedAt": 1652894675275,
    "videoSpec": {
      "format": "mp4",
      "tracks": [
        {
          "fps": 23.976023976023978,
          "type": "video",
          "codec": "h264",
          "width": 4096,
          "height": 2048,
          "bitrate": 21324821,
          "duration": 12.011667,
          "pixelFormat": "yuv420p"
        },
        {
          "type": "audio",
          "codec": "aac",
          "bitrate": 253375,
          "channels": 2,
          "duration": 12.031667,
          "sampleRate": 48000
        }
      ],
      "duration": 12.031667
    },
    "playbackId": "8728n2iaziowj67d",
    "playbackUrl": "https://livepeercdn.com/recordings/e605988e-e8d3-4e14-b5b0-10b01ff94a8b/index.m3u8",
    "downloadUrl": "https://livepeercdn.com/asset/8728n2iaziowj67d/video"
  }
]
```

## Update an asset

When updating an asset, make sure to have the asset.id available. The asset ID is provided in the response when an asset is uploaded.

### Request

```js
const updateAsset = async () => {
  const response = await axios.patch(
    "https://livepeer.studio/api/asset/$ASSET_ID",
    {
      headers: {
        Authorization: `Bearer ${process.env.LP_API_KEY}`,
        "Content-Type": "application/json",
      },
      data: JSON.strinify({
        name: "Example name",
      }),
    }
  );
  console.log(JSON.stringify(response.data));
};
```

### Response

```json
{
  "id": "4c21895e-2488-4c0a-9377-3369ff586ddd",
  "hash": [
    {
      "hash": "6dad0a8e7a92d537c6305fe6ae1e1881",
      "algorithm": "md5"
    },
    {
      "hash": "6132f4e43472b56b4047b7ad018147056c0c2dba9306cd04504e9c8208e72257",
      "algorithm": "sha256"
    }
  ],
  "name": "New waterfall",
  "size": 32407849,
  "status": {
    "phase": "ready",
    "updatedAt": 1652901778931
  },
  "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
  "createdAt": 1652901725324,
  "updatedAt": 1652901778931,
  "videoSpec": {
    "format": "mp4",
    "tracks": [
      {
        "fps": 23.976023976023978,
        "type": "video",
        "codec": "h264",
        "width": 4096,
        "height": 2048,
        "bitrate": 21324821,
        "duration": 12.011667,
        "pixelFormat": "yuv420p"
      },
      {
        "type": "audio",
        "codec": "aac",
        "bitrate": 253375,
        "channels": 2,
        "duration": 12.031667,
        "sampleRate": 48000
      }
    ],
    "duration": 12.031667
  },
  "playbackId": "4c21k7z2tjcdg8wt",
  "playbackUrl": "https://livepeercdn.com/recordings/54aeff83-404c-490a-9afa-99296a932401/index.m3u8",
  "downloadUrl": "https://livepeercdn.com/asset/4c21k7z2tjcdg8wt/video"
}
```

## Delete an asset

### Request

```js
const deleteAsset = async () => {
  const response = await axios.delete(
    "https://livepeer.studio/api/asset/{id}",
    {
      headers: {
        Authorization: `Bearer ${process.env.LP_API_KEY}`,
      },
    }
  );
  JSON.stringify(response.data);
};
```

### Response

When the asset has been successfully deleted, the response should return a 204

## Export an asset to IPFS

This method allows for exporting an asset imported or uploaded from Livepeer to IPFS.

### Request

Provide the $ASSET_ID of the asset, this can be found using the List Asset method.

```js
const exportAsset = async () => {
  const response = await axios.post(
    "https://livepeer.studio/api/asset/$ASSET_ID/export",
    {
      headers: {
        Authorization: `Bearer ${process.env.LP_API_KEY}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        ipfs: {},
      }),
    }
  );
  console.log(JSON.stringify(res.data));
};
```

### Response

The this example has the response show that the status is pending.

```json
{
  "task": {
    "id": "8b0cd796-8be1-412b-b1dc-8251a35ad2e7",
    "createdAt": 1652903903963,
    "type": "export",
    "inputAssetId": "87289307-b60f-432b-984a-8ede174fa152",
    "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
    "params": {
      "export": {
        "ipfs": {}
      }
    },
    "status": {
      "phase": "pending",
      "updatedAt": 1652903903963
    }
  }
}
Check back with https://livepeer.studio/api/task/$TASK_ID to get the status update.

{
  "id": "8b0cd796-8be1-412b-b1dc-8251a35ad2e7",
  "type": "export",
  "output": {
    "export": {
      "ipfs": {
        "videoFileCid": "QmaMvRNEwvCHuwEZjX9NzFTJtBUrbk7j5D7ngP8xATHwXK",
        "nftMetadataCid": "QmaY8HqYV3kVxwsCQahMYisQiZnjZg2bRVjb6XspTmYMFi",
        "videoFileUrl": "ipfs://QmaMvRNEwvCHuwEZjX9NzFTJtBUrbk7j5D7ngP8xATHwXK",
        "videoFileGatewayUrl": "https://ipfs.livepeer.studio/ipfs/QmaMvRNEwvCHuwEZjX9NzFTJtBUrbk7j5D7ngP8xATHwXK",
        "nftMetadataUrl": "ipfs://QmaY8HqYV3kVxwsCQahMYisQiZnjZg2bRVjb6XspTmYMFi",
        "nftMetadataGatewayUrl": "https://ipfs.livepeer.studio/ipfs/QmaY8HqYV3kVxwsCQahMYisQiZnjZg2bRVjb6XspTmYMFi"
      }
    }
  },
  "params": {
    "export": {
      "ipfs": {}
    }
  },
  "status": {
    "phase": "completed",
    "updatedAt": 1652903908984
  },
  "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
  "createdAt": 1652903903963,
  "inputAssetId": "87289307-b60f-432b-984a-8ede174fa152"
}
```

## List Tasks

When listing tasks, the response will provide information on imported or exported information on the asset.

### Request

Use the list tasks method to get CID and metadata.

To get the CID and metadata URL for the created asset, retrieve the task until it is completed. To do this, check the status field in the response.

```js


const list Task = async () => {

const response = await axios
  .get("https://livepeer.studio/api/task/$TASK_ID", {
    headers: {
      Authorization: `Bearer ${process.env.LP_API_KEY}`,
    },
  })
    console.log(JSON.stringify(response.data));
};
```

### Response

This finished task will have an output with all the information about that asset.

- The `CID` information is located under the `output.export.ipfs` path.
>>>>>>> 095b37c1618145021acd7d67a72150cb368fbe50