
const mongoose = require('mongoose');
videoSchema = new mongoose.Schema({
    courseCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses"
    },
    videoTopic: String,
    videoUrl: String,
    status: {
        type: Boolean,
        default: true
    },
    createdeAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
})
const Video = mongoose.model('videos',videoSchema);
module.exports = Video;