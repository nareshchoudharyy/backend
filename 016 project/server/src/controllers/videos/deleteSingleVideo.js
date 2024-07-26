const Video = require("../../models/videos/Video");

const deleteSingleVideo = async(req,res)=>{
    try{
        const response = await Video.deleteOne(req.params);
        res.status(200).json({'message':'data deleted successfully'});
    }
    catch(error){
        console.log(error)
        res.status(500).json({'message':'internal server error'});
    }
}
module.exports = deleteSingleVideo;