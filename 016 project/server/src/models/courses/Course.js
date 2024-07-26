const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({
    courseName:String,
    coursePrice:Number,
    courseDuration:String,
    courseDescription:String,
    thumbnail:String,
    status:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date
    }
})
const Course = mongoose.model('courses',courseSchema);
module.exports = Course;