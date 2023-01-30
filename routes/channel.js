const { Router } = require('express');
const { allGet } = require('../controllers/getAll');
const allGetbyId = require('../controllers/getByIdAll');

const router = Router();


router.get('/channelTypes', allGet);

router.get('/channelTypes/:id', allGetbyId);


module.exports = router; 