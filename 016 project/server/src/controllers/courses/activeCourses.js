
const Course = require("../../models/courses/Course");

const activeCourses = async (req, res) => {
    try {
        const response = await Course.find({status:true});
        res.status(200).json({message:"data fetched successfully",data:response});
    }
    catch (error) {
        console.log(error)
        res.status(500).json({message:"internal server error"});
    }
}
module.exports = activeCourses;