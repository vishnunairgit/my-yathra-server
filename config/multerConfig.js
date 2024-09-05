
const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/UserFiles');
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: fileStorage }).fields([
    { name: 'logoFile', maxCount: 1 },
    { name: 'imageFile', maxCount: 1 },
    { name: 'resume', maxCount: 1 }

]);

module.exports = upload;


