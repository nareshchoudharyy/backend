const mongoose = require('mongoose');
const slideSchema = mongoose.Schema({
    slideHeading: String,
    slideSubHeading: String,
    slideDescription: String,
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