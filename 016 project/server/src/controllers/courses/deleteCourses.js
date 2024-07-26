
const deleteCourses = async(req,res)=>{
    try{
        console.log(req.body);
        res.status(200).json({message:"data deleted successfully"})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"internal server error"})
    }
}
module.exports = deleteCourses;