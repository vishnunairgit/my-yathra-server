
const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/UserFiles');
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + "-" + file.originalname);
    }
});

const fileFilter = (req, file, callback) => {
    const allowedTypes = ['image/jpeg', 'image/png',];
    if (!allowedTypes.includes(file.mimetype)) {
        return callback(new Error('Invalid file type'), false);
    }
    callback(null, true);
};

const upload = multer({ storage: fileStorage, fileFilter  }).fields([
    { name: 'TripFile', maxCount: 1 },
    { name: 'logoFile', maxCount: 1 },
    { name: 'imageFile', maxCount: 1 },



]);

module.exports = upload;


