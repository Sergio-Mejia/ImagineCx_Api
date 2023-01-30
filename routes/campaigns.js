const { Router } = require('express');
const { allGet } = require('../controllers/getAll');
const allGetbyId = require('../controllers/getByIdAll');

const router = Router();


router.get('/campaigns', allGet);

router.get('/campaigns/:id', allGetbyId);


module.exports = router; 