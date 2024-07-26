const express = require('express');
const { addSlide, viewSlides } = require('../../controllers/mainController');
const slideMulterFile = require('../../middleware/slides/slidesMulter');

const slidesRoutes = express.Router();

slidesRoutes.get('/view_slides', viewSlides)
slidesRoutes.post('/add_slide', slideMulterFile, addSlide)

module.exports = slidesRoutes;