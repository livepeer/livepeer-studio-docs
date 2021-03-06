---
title: The Session Object
---


## About the Session Object

The `session` object is a single live streaming session. It is an especially
important Livepeer Studio API object if need to reference recorded live stream
sessions.

All `session` objects have a `stream` object parent. The session's `parentId` is
the same string as its parent stream's `id`.

All `session` objects are read-only. Many `session` parameter values are
inherited directly from its `stream` parent, for example `profiles`, `record`,
`streamKey` and `playbackId` (all sessions with the same `parentId` use the same
`streamKey` and have the same .m3u8 playback URL).

Other `session` parameter values are unique to it, for example `id`, ingested
`sourceSegments`, duration data, and `recordingUrl` among others.


## Attributes

| Parameter                    | Type      | Description                                                  |
| ---------------------------- | --------- | ------------------------------------------------------------ |
| `createdAt`                  | `number`  | Timestamp when the session was created. Reported in Unix epoch time. |
| `createdByTokenName`         | `string`  | Livepeer Studio user-assigned name for the API key that created the stream object. |
| `id`                         | `string`  | Unique identifier for the session.                           |
| `isActive`                   | `boolean` | `true` while the session is active and up to about five minutes after it has ended. `false` after that." |
| `kind`                       | `string`  | Livepeer Studio API object type.                             |
| `lastSeen`                   | `number`  | Timestamp when video was last ingested for the session. Reported in Unix epoch time. |
| `name`                       | `string`  | Additional identifier for the asset. Not customizable.       |
| `parentId`                   | `string`  | Points to a parent stream object. The session's parentId is the same string as its parent stream's id. |
| `playbackId`                 | `string`  | Unique identifier used to form the live stream playback URL. All sessions with the same parentId have the same .m3u8 playback URL. |
| `profiles`                   | `array`   | Transcoding rendition settings, inherited from the parent stream profiles. The source will be delivered with the renditions in the HLS and does not need to be redefined in the profiles parameter. If no profiles are defined, only the source will be delivered for playback. |
| `record`                     | `boolean` | true means the session is being recorded or was recorded. false means the session is not being recorded or was not recorded. IMPORTANT: If you change the parent stream record value, the new setting will only apply to future sessions, but not the active session. |
| `recordingStatus`            | `string`  | Appears only if record is true. It is either ready when the recorded live stream is available for playback or waiting while the livestream is still active or just recently completed. |
| `recordingURL`               | `string`  | Appears only if record is true and when recordingStatus changes to ready. Its value is the .m3u8 URL to stream the recorded session. |
| `sourceSegments`             | `number`  | Number of source segments processed.                         |
| `sourceSegmentsDuration`     | `number`  | Duration in seconds of session source processed.             |
| `streamKey`                  | `string`  | Unique secret key used to form the RTMP ingest URL. All sessions with the same parentId use the same streamKey. |
| `transcodedSegments`         | `number`  | Number of transcoded rendition segments processed. Should be (sourceSegments * number of profiles). |
| `transcodedSegmentsDuration` | `number`  | Duration in seconds of transcoded renditions processed. Should be (sourceSegmentsDuration * number of profiles). |
| `userId`                     | `string`  | Unique identifier for the Livepeer Studio user account that created the parent stream object. |
