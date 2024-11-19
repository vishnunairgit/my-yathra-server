const express = require('express');
const router = express.Router();
const bookNowcontroller = require('../controllers/bookNowController');




router.post('/BookNow', bookNowcontroller.BookNow);



module.exports = router;
