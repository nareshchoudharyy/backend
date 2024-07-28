const mongoose = require('mongoose');
const slideSchema = mongoose.Schema({
    sliderHeading: String,
    sliderSubHeading: String,
    sliderDescription: String,
    sliderImage: String,
    status: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    } 
})
const Slide = mongoose.model('slides', slideSchema);
module.exports = Slide;