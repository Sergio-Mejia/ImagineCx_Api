const { Router } = require('express');
const { allGet } = require('../controllers/getAll');
const { reportGetbyId } = require('../controllers/reports');

const router = Router();


router.get('/analyticsReports', allGet);

router.get('/analyticsReports/:id', reportGetbyId);


module.exports = router; 