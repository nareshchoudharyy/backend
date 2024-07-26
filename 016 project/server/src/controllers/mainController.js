//admin
const adminLogin = require('./admin/adminLogin');
const adminRegister = require('./admin/adminRegister');
//courses
const activeCourses = require('./courses/activeCourses');
const addCourse = require('./courses/addCourse');
const changeStatus = require('./courses/changeStatus');
const deleteCourse = require('./courses/deleteCourse');
const updateCourse = require('./courses/updateCourse');
const viewCourse = require('./courses/viewCourse');
const viewSingleCourse = require('./courses/viewSingleCourse');
//otp
const generateOtp = require('./otp/generateOtp');
//users
const registerUser = require('./users/registeruser');
//videos
const addVideo = require('./videos/addVideo');
const changeVideoStatus = require('./videos/changeVideoStatus');
const deleteSingleVideo = require('./videos/deleteSingleVideo');
const viewSingleVideoDetails = require('./videos/viewSingleVideoDetails');
const viewVideos = require('./videos/viewVideos');
//slides
const addSlide = require('./slides/addSlide');
const viewSlides = require('./slides/viewSlides');

module.exports = {
    //admin 
    adminLogin,
    adminRegister,
    //courses
    addCourse,
    viewCourse,
    changeStatus,
    deleteCourse,
    updateCourse,
    viewSingleCourse,
    activeCourses,
    //videos
    addVideo,
    viewVideos,
    deleteSingleVideo,
    changeVideoStatus,
    viewSingleVideoDetails,
    //slides
    addSlide,
    viewSlides,
    //OTP
    generateOtp,
    //users
    registerUser
}