const Video = require("../../models/videos/Video");

const viewVideos = async (req,res)=>{
    try{
        const response = await Video.find().populate('courseCategory');
        res.status(200).json({'message':'data inserted successfully',data:response})
    }
    catch(error){
        console.log(error)
        res.status(500).json({'message':"internal server error"})
    }
}
module.exports = viewVideos;