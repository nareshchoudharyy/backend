const Slide = require("../../models/slides/Slide");

const viewSlides = async (req, res) => {
    try {
        const response = await Slide.find();
        const filePath = `${req.protocol}://${req.get('host')}/uploads/slides/`
        res.status(200).json({ 'message': 'data fetched successfully', data: response, filePath});
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'internal server error' });
    }
}
module.exports = viewSlides;