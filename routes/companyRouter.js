const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const upload = require('../config/multerConfig');
const { adminAuth } = require('../Middlewares/Authorization');




router.get('/GetMycompany', companyController.GetMycompany);
router.put('/UpdateCompany/:companyId', adminAuth ,upload, companyController.UpdateCompany);
router.put('/UpdateCompanyPassword/:companyId', adminAuth, companyController.UpdateCompanyPassword)




module.exports = router;
