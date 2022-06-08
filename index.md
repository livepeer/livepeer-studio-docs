---
title: QuickStart
---


The following includes instructions to get started with the [`Livepeer Studio API`](/references/) with `Node.js` and `Axios`. Using our API and documentation, you can build applications following this three-step process:

- Create a livestream 
- Record the livestream 
- Play back the livestream 

> **Note:** Although Livepeer Studio currently supports `Node.js` and `Axios`. In the future we will support additional programming languages. 

### Use Cases/Advantages-Disadvantages

You can apply this quick start to:

- Pass in our address to YouTube, Twitch, (saving money on transcoding)
- Multi-streaming
- OBS Professional Broadcasting (e.g. Livestreaming changing camera angles, or multiple "views" within a screen)
- Livepeer Studio In-browser Application
- Livestreaming encoder with more latency
- Inbrowser platforms (Restream/Streamyard)
- https://www.notion.so/livepeer/Blog-Post-Tutorial-on-choosing-a-streaming-method-3471461c0054460abcafc2df584aeb06

### Methods

You can employ a variety of methods with the instructions in this Quickstart: 

- Build a Livepeer stream to Zoom using the transcoding network
- Build for livestreaming for [Inbrowser platforms](https://docs.google.com/document/d/1tl_CsOmZT1_ExxVu6IdcoPOTJwcxQA015scsfULyKgk/edit#heading=h.daphfpfvg4hn) (Streamyard, Restream, Agora (with their own transcoding -- sending signal to Livepeer))
- Build Mobile livestreaming for e.g. a Larix application --, transcoding on our Livepeer network, and/or customizing the application, e.g. embedding a screen within a video player.

## What you need to know

- Familiarity with the [Livepeer Studio concepts](http://localhost:3000/studio101)
- Experience developing with [Node.js](https://nodejs.org/en/)
- Experience with [Axios](https://axios-http.com/)

## Technical Requirements 

- Any operating System
- Any IDE that works with your library
- A [Livepeer Account](https://livepeer.com/blog/stream-into-livepeer-video-services-first-time)
- An [API key](https://livepeer.com/docs/guides/start-live-streaming/api-key)
- Download and install [OBS](https://obsproject.com/)

- Install [Node.js](https://nodejs.org/en/)

- Install [Axios](https://axios-http.com/)

- [Livepeer API Reference](https://livepeer.com/docs/api-reference)


## Build a Livestream Application 

As mentioned above, the steps to build a livestream application based on our recommended best practices follow the cycle of Livestreaming (Create, Record, Playback):

### Create a Stream

1. To create a stream you will need to get:

- A `Stream key`, 
- An `RTMP ingest URL`
- A `playbackURL` 

<!-- link the above to existing documentation-->

> **Note:** Be sure to store these so that you will have access to them for future steps. 

The request will return the following parameters to be used in [OBS](https://obsproject.com/):

- A `playbackId` The number of the time a browser or device started playing the stream
- A stream `id`: to enable recording for the stream
- A `streamKey`: the code that allows OBS to communicate with a streaming platform and send video content to be live streamed


<!-- link the above to existing documentation-->

#### Request

```js
const axios = require('axios');
const rtmpURL = "https://livepeer.com/api";
const playbackURL = "https://livepeercdn.com/hls/{playbackId}/index.m3u8";
 
const createStream = async () => {
 const response = await axios.post("https://livepeer.com/api/stream", {
   headers: {
     'Authorization': `Bearer ${process.env.LV_API_KEY}`,
     'Content-Type': 'application/json'
   },
   data: JSON.stringify({
     "name": "test_stream",
     "profiles": [
       {
         "name": "720p",
         "bitrate": 2000000,
         "fps": 30,
         "width": 1280,
         "height": 720
       },
       {
         "name": "480p",
         "bitrate": 1000000,
         "fps": 30,
         "width": 854,
         "height": 480
       },
       {
         "name": "360p",
         "bitrate": 500000,
         "fps": 30,
         "width": 640,
         "height": 360
       }
     ]
   })
 });
 console.log(JSON.stringify(response.data));
}
```

#### Response

The API response returns:

- `playbackId`, `id` of the stream, and the `streamKey` available

- The flag for  `"record": false` should appear in the API response, indicating the ability to record and save the live stream for later views.


```JSON
{
   "lastSeen": 0,
   "isActive": false,
   "record": false,
   "suspended": false,
   "sourceSegments": 0,
   "transcodedSegments": 0,
   "sourceSegmentsDuration": 0,
   "transcodedSegmentsDuration": 0,
   "sourceBytes": 0,
   "transcodedBytes": 0,
   "profiles": [
       {
           "name": "720p",
           "bitrate": 2000000,
           "fps": 30,
           "width": 1280,
           "height": 720
       },
       {
           "name": "480p",
           "bitrate": 1000000,
           "fps": 30,
           "width": 854,
           "height": 480
       },
       {
           "name": "360p",
           "bitrate": 500000,
           "fps": 30,
           "width": 640,
           "height": 360
       }
   ],
   "name": "test_stream",
   "kind": "stream",
   "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
   "renditions": {},
   "id": "05b0b7b7-c6aa-45b8-a947-6c11997a3efd",
   "createdAt": 1654273038907,
   "streamKey": "05b0-nyoa-jf0p-s2x8",
   "playbackId": "05b0572n8voz1t4w",
   "createdByTokenName": "Test",
   "multistream": {
       "targets": []
   }
}
```

<!-- As you can see from the API response, we now have our `playbackId`, `id` of the stream, and the `streamKey` available.

 We will need the `playbackId` for our `playbackURl`, the `streamKey` to use in OBS, and the `id` to enable the recording for the stream. -->

2. Include the following in variables for later use:

```js
let playBackId = "05b0572n8voz1t4w";
let id = "05b0b7b7-c6aa-45b8-a947-6c11997a3efd";
let streamKey = "05b0-nyoa-jf0p-s2x8";
```

### Toggle the Recording 
<!-- API Call-->

3. Set record to `on` 

> **Note:** By default,  `record` is set to `off` (for a newly created stream).

#### Request

```js
const recordOn = async () => {
 const response = await axios.patch("https://livepeer.com/api/stream/{id}/record", {
   headers: {
     'Authorization': `Bearer ${process.env.LV_API_KEY}`,
     'Content-Type': 'application/json'
   },
   data: JSON.stringify({
     "record": true
 })
 });
  console.log(JSON.stringify(response.data));
}
```
#### Response

The response should be a `204`

### Start Streaming in OBS

1. Now that you have created a new stream and turned on the recording, you will be able to [start streaming in OBS](https://livepeer.com/blog/stream-into-livepeer-video-services-first-time)



2. Verify that is streaming is on: 

#### Request
 ```
 /api/stream?streamsonly=1&filters=[{"id": "isActive", "value": true}
 ``` 

#### Response

Returns: 
```json
"isActive": true
```

```js
const streamOn = async () => {
 const response = await axios.get("https://livepeer.com/api/stream?streamsonly=1&filters=[{"id": "isActive", "value": true}", {
   headers: {
     'Authorization': `Bearer ${process.env.LV_API_KEY}`,
     'Content-Type': 'application/json'
   },
   data: JSON.stringify({
     "record": true
 })
 });
  console.log(JSON.stringify(response.data));
}
```

3. Once the live stream is complete, stop the stream after 6 minutes from the end of the streaming session.

### Retreive a List of Recorded Sessions

1. Confirm that the session has been recorded:


#### Request
 
```js
const getRecording = async () => {
 const response = await axios.get("https://livepeer.com/api/stream/{id}/sessions?record=1", {
   headers: {
     'Authorization': `Bearer ${process.env.LV_API_KEY}`,
     'Content-Type': 'application/json'
   }
 });
  console.log(JSON.stringify(response.data));
}
```
 
#### Response
 
```json
"createdAt": 1654285544854,
       "ingestRate": 0,
       "renditions": {},
       "outgoingRate": 0,
       "recordingStatus": "ready",
       "recordingUrl": "https://livepeercdn.com/recordings/05b0b7b7-c6aa-45b8-a947-6c11997a3efd/index.m3u8",
       "mp4Url": "https://livepeercdn.com/recordings/05b0b7b7-c6aa-45b8-a947-6c11997a3efd/source.mp4"
```

### Import an Asset

Recording from Livepeer automatically imports an asset. There is no need to make a request for this.

### List an Asset

The recorded live stream is stored, and  the `playbackURL` can retrieve and play the livestream:

#### Request

To get the `playbackURL`, use `/api/asset`:

```js
const getPlaybackURL = async () => {
 const response = await axios.get("https://livepeer.com/api/asset", {
   headers: {
     'Authorization': `Bearer ${process.env.LV_API_KEY}`,
     'Content-Type': 'application/json'
   }
 });
  console.log(JSON.stringify(response.data));
}
```

#### Response

At the bottom of the response, there is the `playbackURL` for viewing.

```json
{
       "id": "2a36cec4-40e1-4ece-9a21-f24b632901c1",
       "hash": [
           {
               "hash": "9c0871abb5a23757b681485a3eb1fe66",
               "algorithm": "md5"
           },
           {
               "hash": "4c316d62cc8084ee02ead7862a7ec814433cb18c0a025952d5461d9fc99b8b46",
               "algorithm": "sha256"
           }
       ],
       "name": "live-to-vod-05b07f11-4900-453a-af05-03376bba4514",
       "size": 23952463,
       "status": {
           "phase": "ready",
           "updatedAt": 1654357897107
       },
       "userId": "eada599f-3d58-499b-ba24-c7f3faf988de",
       "createdAt": 1654357880804,
       "videoSpec": {
           "format": "mp4",
           "tracks": [
               {
                   "type": "audio",
                   "codec": "aac",
                   "bitrate": 159859,
                   "channels": 2,
                   "duration": 2.005313,
                   "sampleRate": 48000
               },
               {
                   "fps": 30,
                   "type": "video",
                   "codec": "h264",
                   "width": 1280,
                   "height": 720,
                   "bitrate": 2863648,
                   "duration": 2,
                   "pixelFormat": "yuv420p"
               }
           ],
           "duration": 2.005313
       },
       "playbackId": "05b0k8kughw7o6ml",
       "downloadUrl": "https://livepeercdn.com/asset/05b0k8kughw7o6ml/video"
   }
```


### Check the Recorded Video

There are different options to check the recorded video (***See** below)

1. Here you can use the [Bitmovin Test Player](https://bitmovin.com/demos/stream-test?format=dash&manifest=https%3A%2F%2Fbitmovin-a.akamaihd.net%2Fcontent%2FMI201109210084_1%2Fmpds%2Ff08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd)

2. Copy and paste the `playbackURL` in the Stream box
3. select the HLS option.
4. Click the blue button " `Load Settings`" when you press `play`, 
5. You should see the recorded live stream


#### Other Options of Playback

- Using the Safari web browser: directly paste the `playbackURL` in the address bar 

- You can also build your own video player

### Next Steps 

See our guide about [How to implement a player in the front end](https://github.com/codentell/livepeer-player-tutorial)

