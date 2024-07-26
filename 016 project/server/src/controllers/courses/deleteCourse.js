const Course = require("../../models/courses/Course");

const deleteCourse = async (req, res) => {
    try {
        const response = await Course.deleteOne(req.params);
        console.log(response)
        res.status(200).json({ massage: "course deleted successfully",data:response })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({ massage: "internal server error" })
    }

}
module.exports = deleteCourse;