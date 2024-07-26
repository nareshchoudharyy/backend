const multer = require('multer');
multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads/slides')
    },
    filename: (req, file, cb) => {
        const nameArr = file.originalname.split('.');
        cb(null, 'slidesImage' + Date.now() + '.' + nameArr[nameArr.length - 1]);
    }
})
const slideMulterFile = multer({ storage: multerStorage}).single('sliderImage');
module.exports = slideMulterFile;