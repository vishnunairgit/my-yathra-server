const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController')




router.get('/GetMycompany', companyController.GetMycompany);



module.exports = router;
