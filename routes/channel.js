const { Router } = require('express');
const {
        channelTypesGetbyId } = require('../controllers/channel');
const { allGet } = require('../controllers/getAll');

const router = Router();


router.get('/channelTypes', allGet);

router.get('/channelTypes/:id', channelTypesGetbyId);


module.exports = router; 