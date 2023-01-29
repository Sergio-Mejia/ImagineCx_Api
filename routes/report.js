const { Router } = require('express');
const { reportsGet,
        reportGetbyId } = require('../controllers/reports');

const router = Router();


router.get('/reports', reportsGet);

router.get('/reports/:id', reportGetbyId);


module.exports = router; 