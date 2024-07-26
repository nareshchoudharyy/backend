const express = require('express');
const { addVideo, viewVideos, deleteSingleVideo, changeVideoStatus, viewSingleVideoDetails } = require('../../controllers/mainController');

const videosRoutes = express.Router();
videosRoutes.get('/view_videos',viewVideos);
videosRoutes.post('/add_video',addVideo);
videosRoutes.put('/change_video_status/:_id',changeVideoStatus);
videosRoutes.delete('/delete_video/:_id',deleteSingleVideo);
videosRoutes.get('/single_video_details/:_id',viewSingleVideoDetails);

module.exports = videosRoutes;