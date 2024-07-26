const multer = require('multer');

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads')
    },
    filename: (req, file, cb) => {
        const nameArr = file.originalname.split('.');
        cb(null, Date.now() + '.' + nameArr[nameArr.length - 1]);
    }
})

const courseMulterFile = multer({ storage: multerStorage }).single('thumbnail');

module.exports = courseMulterFile;