const multer = require('multer');

multerStorage = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, 'src/uploads')
    },
    filename: (req, file, next) => {
        const newName = Date.now() + file.originalname
        next(null, newName);
    }
})
const upload = multer({ storage: multerStorage }).fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'images', maxCount: 10 }
])
module.exports = upload;