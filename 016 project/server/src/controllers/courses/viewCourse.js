const Course = require("../../models/courses/Course");

const viewCourse = async (req, res) => {
    try {
        const response = await Course.find();
        const filePath = `${req.protocol}://${req.get('host')}/uploads/`;
        res.status(200).json({ 'message': 'data fetched duccessfully', data: response, filePath: filePath })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ 'message': "internal server error" });
    }
}
module.exports = viewCourse;