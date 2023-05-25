[![badge](https://img.shields.io/twitter/follow/api_video?style=social)](https://twitter.com/intent/follow?screen_name=api_video)
&nbsp; [![badge](https://img.shields.io/github/stars/apivideo/api.video-android-live-stream?style=social)](https://github.com/apivideo/api.video-android-live-stream)
&nbsp; [![badge](https://img.shields.io/discourse/topics?server=https%3A%2F%2Fcommunity.api.video)](https://community.api.video)
![](https://github.com/apivideo/.github/blob/main/assets/apivideo_banner.png)
<h1 align="center">TODO: PROJECT NAME</h1>

[api.video](https://api.video) is the video infrastructure for product builders. Lightning fast
video APIs for integrating, scaling, and managing on-demand & low latency live streaming features in
your app.

# Table of contents

- [Table of contents](#table-of-contents)
- [Project description](#project-description)
- [Getting started](#getting-started)
    - [Installation](#installation)
    - [Code sample](#code-sample)
- [Documentation](#documentation)
- [Dependencies](#dependencies)
- [FAQ](#faq)

# Project description

A small example of how to build your own TikTok or Instagram Reels like use case. The example demostrates the use of api.video streaming and a css overlay of an emoji picker. We leverage Ably in order to create an instant emoji sharing between users.

![livestream-with-realtime-communication-diagram-ably](https://github.com/apivideo/livestream-with-realtime-ably/assets/60220723/e03df495-c895-4358-8036-4e96af293269)

# Getting started

## Installation

Once the repo is cloned, run npm install or yarn install

### Add your stream id:
Option 1: Navigate to the api.video dashboard and copy the stream id from the stream details

Option 2: Fetch the stream id from the list of streams (https://docs.api.video/reference/get_live-streams)

Replace the stream id in src/pages/index.tsx const streamId = 'xxxxxxxxxx';

### Add your Ably api key

Sign up to Ably

Copy the api key

<img width="1045" alt="Screenshot 2023-05-25 at 16 18 14" src="https://github.com/apivideo/livestream-with-realtime-ably/assets/60220723/3c594b71-a92b-42ef-9675-b4f258b212d4">

Replace the api key in src/utils/messageHanlder.tsx `#apiKey = 'xxxxxx';`

### Run the example

Run the example by `npm run dev`

The example will run on `localhost:3000`


# FAQ

If you have any questions, ask us in the [community](https://community.api.video).
