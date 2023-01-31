const { Router } = require('express');
const { allGet } = require('../controllers/getAll');
const allGetbyId = require('../controllers/getByIdAll');

const router = Router();


router.get('/messageBases', allGet);

router.get('/messageBases/:id', allGetbyId);


module.exports = router; 