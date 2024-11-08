
const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');
const upload = require('../config/multerConfig');
// const { adminAuth } = require('../Middlewares/Authorization');

// POST /api/jobs/Addjob
router.post('/AddTrip', upload , tripController.Addtrip);

router.get('/GetTrips', tripController.GetTrips);







module.exports = router;
