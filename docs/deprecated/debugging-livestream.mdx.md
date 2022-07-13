---
title: Debugging Livestream issues
---

## Debugging livestream issues

You can follow these steps to [debug common stream playback issues](https://livepeer.studio/preview/blog/debugging-playback-issues).

1. Log into the Livepeer Studio dashboard the [Livepeer Studio test player](https://livepeer.studio/app/test-player)

1. Locate your playback URL.

[guide](/guides/livestreaming/playback) to find your live
stream playback URL.

1. Load your playback URL in the [Livepeer Studio test player](https://livepeer.studio/app/test-player). If
   you get a "Stream not found" error, confirm that your URL is correct. It should
   look something like this:
   `https://livepeercdn.com/hls/123456abcdef7890/index.m3u8`

1. Identify the problem you are experiencing?

- **The video is not playing in my application at all.** Go to step 3.
- **The video is playing, but the quality is poor.** Go to step 5.
- **I don't know.** Go to step 4.

1. In the [Livepeer Studio test players](https://livepeer.studio/app/test-player),
   Check to see if your stream playback is working:

- **Yes, the quality is great:** There may be something wrong with your player
  configuration. Start by checking if your player is loading the correct
  playback URL.
- **No:** Go to the next step.
- **Yes, but the quality is poor:** Go to step 5

1. Check the stream status is active below the Livepeer Studio test player.

- **No:** No video is being ingested. Confirm your or your streamer’s broadcast
  software RTMP configuration is set up properly. If you are using OBS to stream
  into Livepeer, check out steps 4-5 in
  [this blog post](https://livepeer.studio/blog/first-livepeer-stream-in-five-minutes).
- **Yes:** Go to the next step.

1. Check the your stream's ingest rate by looking at the graph in the Stream Info
   section of the test player. Every 10 seconds, the rate at which your stream is
   being ingested into Livepeer Studio is updated. Is the plotted ingest rate line
   relatively flat?

- **No:** If the chart shows a lot of sharp peaks and valleys, this indicates
  your broadcasting workflow is unstable. The RTMP stream hitting the Livepeer Studio
  ingest server has problems. Try ensuring a stronger internet connection at the
  source via a wired ethernet connection or by broadcasting on a more reliable
  network.
- **Yes:** This usually indicates your broadcasting workflow is stable with a
  good internet connection. Go to the next step.

1. Check if you are transcoding. Is nothing listed next to `Playback settings`
   below the Livepeer Studio test player?

- **Yes:** You are not transcoding your source stream, and only the source
  profile is available for playback (no ABR) via the Livepeer Studio CDN. There may
  be something wrong with your source stream. If you can, instruct the streamer
  to set the keyframe interval to 2 in their broadcasting software; this can
  help. In general, make sure your broadcasting workflow is stable. The RTMP
  stream hitting the Livepeer Studio ingest server has problems. Try ensuring a stronger
  internet connection at the source via a wired ethernet connection or by
  broadcasting on a more reliable network.
  <br />
  Or, if the resolution, FPS and/or bitrate of the source stream is very high and
  if your internet bandwidth is low, playback will be slow and choppy. Consider transcoding
  your livestreams. If no transcoding renditions are available for playback, you
  are not making use of ABR.
- **No:** If one or more `profiles` are listed, go to the next step.

1. Do all the `profiles` have the same FPS? Between 5 FPS and 60 FPS work best.
   Setting FPS to `0` is also acceptable and passes through the source FPS to the
   transcoded renditions.

- **No:** Your `profiles` FPS is configured incorrectly. Create a new stream,
  and set all `profiles` FPS to the same value.
- **Yes:** Go to the next step.

1.  Check if something is wrong with the source stream. The source stream is the
    stream sent from your broadcast software. Livepeer Studio serves the source stream
    with the transcoded renditions via the playback URL.

The left player shows your source stream, as served by the Livepeer Studio CDN.
This player is configured to only playback the highest resolution available.
Except for in rare occassions, the highest resolution is the non-transcoded
source stream.

Compare the source in the left player with the transcoded renditions in the
player on the right (ABR). You can manually switch between transcoded renditions
by clicking on the &#8942; symbol in the lower right corner of the player. Do
the renditions on the right player show more problems than in the left source?

- **No:** If the problems in the source-only stream are also present in the
  transcoded renditions, there is something wrong with your source stream. If
  you can, instruct the streamer to set the keyframe interval to 2 in their
  broadcasting software; this can help. In general, make sure your broadcasting
  workflow is stable. The RTMP stream hitting the Livepeer Studio ingest server has
  problems. Try ensuring a stronger internet connection at the source via a
  wired ethernet connection or by broadcasting on a more reliable network.

- **Yes:** If you created your stream via the Livepeer Studio API, confirm your
  `profile bitrate` settings are
  [reasonable](https://developer.apple.com/documentation/http_live_streaming/hls_authoring_specification_for_apple_devices).
  And if they are, reach out to Livepeer Studio for further [help](help@livepeer.studio)
