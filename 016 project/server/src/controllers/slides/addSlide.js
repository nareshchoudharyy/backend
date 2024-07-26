const Slide = require("../../models/slides/Slide");

const addSlide = async (req, res) => {
    try {
        const slideData = req.body;
        if (req.file) {
            slideData.sliderImage = req.file.filename;
        }
        const data = new Slide(slideData)
        const response = await data.save();
        res.status(200).json({ 'message': 'slide added successfully', 'data': response })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'internal server error' });
    }
}
module.exports = addSlide;