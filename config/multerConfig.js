
// const multer = require('multer');

// const fileStorage = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null, 'public/UserFiles');
//     },
//     filename: (req, file, callback) => {
//         callback(null, Date.now() + "-" + file.originalname);
//     }
// });

// const fileFilter = (req, file, callback) => {
//     const allowedTypes = ['image/jpeg', 'image/png',];
//     if (!allowedTypes.includes(file.mimetype)) {
//         return callback(new Error('Invalid file type'), false);
//     }
//     callback(null, true);
// };

// const upload = multer({ storage: fileStorage, fileFilter  }).fields([
//     { name: 'TripFile', maxCount: 1 },
//     { name: 'logoFile', maxCount: 1 },
//     { name: 'imageFile', maxCount: 1 },
// ]);

// module.exports = upload;


const fs = require('fs');
const multer = require('multer');
const path = require('path');

// Ensure the destination folder exists
const uploadDirectory = 'public/UserFiles';
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Multer storage configuration
const fileStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, uploadDirectory); // The directory where files will be stored
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + "-" + file.originalname); // Ensure unique filenames
    }
});

// File type filter to allow only image files
const fileFilter = (req, file, callback) => {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.mimetype)) {
        return callback(new Error('Invalid file type. Only JPEG and PNG are allowed.'), false);
    }
    callback(null, true);
};

// Multer upload middleware configuration for handling multiple files
const upload = multer({
    storage: fileStorage,
    fileFilter: fileFilter,
}).fields([
    { name: 'TripFile', maxCount: 1 },
    { name: 'logoFile', maxCount: 1 },
    { name: 'imageFile', maxCount: 1 },
]);

// Export the upload middleware to be used in your routes
module.exports = upload;
