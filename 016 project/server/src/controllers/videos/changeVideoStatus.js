const Video = require("../../models/videos/Video")

const changeVideoStatus =async(req,res)=>{
    try{
        const response = await Video.findOneAndUpdate(req.params,{
            $set:req.body
        });
        res.status(200).json({'message':'data updated successfully'});
    }
    catch(error){
        console.log(error);
        res.status(500).json({'message':'internal server error'});
    }
}
module.exports = changeVideoStatus;