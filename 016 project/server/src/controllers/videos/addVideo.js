const Video = require("../../models/videos/Video");

const addVideo = async (req,res)=>{
    try{
        const data = new Video(req.body);
        const response = await data.save();
        res.status(200).json({'message':'data inserted successfully',data:response})
    }
    catch{
        res.status(500).json({'message':"internal server error"})
    }
}
module.exports = addVideo;