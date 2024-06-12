const multer = require("multer");

const multerStorage = multer.diskStorage({
    destination:((req,file,next)=>{
        next(null,'uploads')
    }),
    filename:((req,file,next)=>{
        const newNameImages = Date.now() + file.originalname;
        next(null,newNameImages);
    })
})

// const upload = multer({storage:multerStorage}).fields([
//     {name:'thumbnail', maxCount:2},
//     {name:'images', maxCount:5}
// ]);


const upload = multer({storage:multerStorage}).array('thumbnail',2);

module.exports = upload;    