const express = require('express');
const adminRoutes = require('./routes/admin/adminRoutes');
const coursesRoutes = require('./routes/courses/coursesRoutes');
const videosRoutes = require('./routes/videos/videosRoutes');
const otpRouter = require('./routes/otp/otp');
const userRouter = require('./routes/users/userRouters');
const slidesRoutes = require('./routes/slides/slidesRoutes');
require('./db/config');

const allRoutes = express.Router();

allRoutes.use('/admin', adminRoutes);
allRoutes.use('/courses', coursesRoutes);
allRoutes.use('/videos', videosRoutes)
allRoutes.use('/otp', otpRouter)
allRoutes.use('/users', userRouter)
allRoutes.use('/slides', slidesRoutes)

module.exports = allRoutes;