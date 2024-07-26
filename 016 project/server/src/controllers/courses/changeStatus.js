const Course = require("../../models/courses/Course");

const changeStatus = async (req, res) => {
    try {
        const response = await Course.findOneAndUpdate(
            req.params, {
            $set: {
                status: req.body.status,
                updatedAt: Date.now()
            }
        }
        )
        res.status(200).json({ message: 'status changed successfully',data:response})
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'internal server error' })
    }
}
module.exports = changeStatus;