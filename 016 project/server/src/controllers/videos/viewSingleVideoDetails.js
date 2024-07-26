const Video = require("../../models/videos/Video");

const viewSingleVideoDetails = async (req, res) => {
    try {
        console.log(req.params)
        const response = await Video.findOne(req.params)
        console.log(response)
        res.status(200).json({ 'message': 'data fetched successfully', data: response });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'internal server error' });
    }
};
module.exports = viewSingleVideoDetails;