const express = require('express');
const { addSlide, viewSlides, deleteSlide } = require('../../controllers/mainController');
const slideMulterFile = require('../../middleware/slides/slidesMulter');

const slidesRoutes = express.Router();

slidesRoutes.get('/view_slides', viewSlides)
slidesRoutes.post('/add_slide', slideMulterFile, addSlide)
slidesRoutes.delete('/delete_slide', deleteSlide);

module.exports = slidesRoutes;