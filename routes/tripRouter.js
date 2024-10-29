
const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');
// const { adminAuth } = require('../Middlewares/Authorization');

// POST /api/jobs/Addjob
router.post('/AddTrip', tripController.Addtrip);






module.exports = router;
