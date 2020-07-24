# Britein - Online Classes Using MPEG-DASH

This project aims to display online videos using mpeg-dash and Cloudinary is used to store the videos. 

### MPEG-DASH

Streaming is a way of delivering data over the Internet so that a device can start displaying the data before it fully loads. Video is streamed over the Internet so that the client device does not have to download the entire video file before playing it.


### Cloudinary
You can simplify the creation of these files using Cloudinary’s adaptive streaming profile functionality, which enables you to automatically generate all of the required video files for each of the desired quality and bitrate levels, along with the corresponding index and master files.
Click [here](https://cloudinary.com/documentation/video_player_hls_dash) to learn more about it.

## Visuals
<img src="images/visual.png" />

## Running The Project
You need to have node installed in your machine. 
#### In the client directory, you can run:


```bash
npm start
```

## Upload a file
In the project directory has a file named server.js where you can see a sample of how upload a file in cloudinary server.