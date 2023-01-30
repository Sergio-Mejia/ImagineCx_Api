const { Router } = require('express');
const {
        campaignsGetbyId } = require('../controllers/campaigns');
const { allGet } = require('../controllers/getAll');

const router = Router();


router.get('/campaigns', allGet);

router.get('/campaigns/:id', campaignsGetbyId);


module.exports = router; 