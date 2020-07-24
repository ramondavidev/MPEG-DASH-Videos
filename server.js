const express = require('express');
const app = express();
const port = 3000;

var cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'xxxxx', 
  api_key: 'xxxxx', 
  api_secret: 'xxxxx' 
});

app.get('/update-file', async (req, res) =>{
    try {
        var up_options = 
        {resource_type: "video", 
        eager: [
            //{streaming_profile: "sd", format: "mpd"},
            //{streaming_profile: "hd", format: "mpd"},
            {streaming_profile: "full_hd", format: "mpd"} 
        ],                                 
        eager_async: true,
        eager_notification_url: "http://localhost:3000/",
        public_id: "fileId"};
        const result = await cloudinary.v2.uploader.upload(file, up_options);
        console.log(result);
        res.send('You updated a file with success!');
    } catch (error) {
        res.send('Something went wrong!');
        console.log(error);
    }
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));