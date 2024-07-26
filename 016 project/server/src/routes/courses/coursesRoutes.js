const express = require("express");
const { addCourse, viewCourse, changeStatus, deleteCourse, updateCourse, viewSingleCourse, activeCourses } = require("../../controllers/mainController");
const courseMulterFile = require("../../middleware/courses/courseMulter");

const coursesRoutes = express.Router();
coursesRoutes.get('/view_courses', viewCourse);
coursesRoutes.post('/add_course', courseMulterFile, addCourse);
coursesRoutes.put('/change_status/:_id', changeStatus);
coursesRoutes.delete('/delete_course/:_id', deleteCourse);
coursesRoutes.put('/update_course/:_id', courseMulterFile, updateCourse);
coursesRoutes.get('/view_single_course/:_id', viewSingleCourse);
coursesRoutes.get('/active_courses', activeCourses);

module.exports = coursesRoutes;