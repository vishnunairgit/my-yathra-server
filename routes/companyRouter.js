const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const upload = require('../config/multerConfig');




router.get('/GetMycompany', companyController.GetMycompany);
router.put('/UpdateCompany/:userId',upload, companyController.UpdateCompany);
router.put('/UpdateCompanyPassword/:userId', companyController.UpdateCompanyPassword)




module.exports = router;
