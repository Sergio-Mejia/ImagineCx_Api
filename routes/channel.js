const { Router } = require('express');
const { channelTypesGet,
        channelTypesGetbyId } = require('../controllers/channel');

const router = Router();


router.get('/channelTypes', channelTypesGet);

router.get('/channelTypes/:id', channelTypesGetbyId);


module.exports = router; 