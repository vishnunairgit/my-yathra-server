
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const upload = require('../config/multerConfig');

router.post('/ApplyJob', upload, studentController.ApplyJob )
router.post('/AddStudent', upload, studentController.AddStudent )





module.exports = router;
