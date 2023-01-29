const { Router } = require('express');
const { campaignsGet,
        campaignsGetbyId } = require('../controllers/campaigns');

const router = Router();


router.get('/campaigns', campaignsGet);

router.get('/campaigns/:id', campaignsGetbyId);


module.exports = router; 