const { Router } = require('express');
const { allGet } = require('../controllers/getAll');
const allGetbyId = require('../controllers/getByIdAll');
const { reportGetbyId } = require('../controllers/reports');

const router = Router();


router.get('/analyticsReports', allGet);

router.get('/analyticsReports/:id', allGetbyId);


module.exports = router; 