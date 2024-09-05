const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../config/multerConfig');
const { adminAuth } = require('../Middlewares/Authorization');



router.get('/Getuser', adminAuth,  userController.Getuser)
router.put('/updateUser/:userId', upload, adminAuth, userController.updateUser)
router.put('/updateUserPassword/:userId', adminAuth, userController.updateUserPassword)



module.exports = router;