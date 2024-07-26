const path = require("path");
const Course = require("../../models/courses/Course");
const fs = require('fs');

const updateCourse = async (req, res) => {
    try {

        const newData = req.body;

        if (req.file) {

            newData.thumbnail = req.file.filename;

            const { thumbnail } = await Course.findOne(req.params);
            if (thumbnail) {
                const oldFilePath = path.join('src', 'uploads', thumbnail);
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
        }

        // console.log(newData);
        const response = await Course.findOneAndUpdate(
            req.params,
            {
                $set: newData
            }
        )
        console.log(response)
        res.status(200).json({ 'message': 'data updated successfully', data: response })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'internal server error' })
    }
}
module.exports = updateCourse;