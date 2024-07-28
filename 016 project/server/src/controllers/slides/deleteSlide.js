const { response } = require("express");
const Slide = require("../../models/slides/Slide");

const deleteSlide = async (req, res) => {
    try {
        console.log('working');
        console.log(req.params);
        // const response = await Slide.deleteOne(req.params);
        // console.log(response);
        res.status(200).json({ message: 'data deleted successfully', data: 'response' });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'internal server error' })
    }
}
module.exports = deleteSlide;