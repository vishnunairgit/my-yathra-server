const express = require('express');
const router = express.Router();
const notificationController =require('../controllers/notificationController')



router.get('/getAllNotification', notificationController.getAllNotification);


module.exports = router;
