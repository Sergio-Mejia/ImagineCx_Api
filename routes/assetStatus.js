const { Router } = require('express');
const { allGet } = require('../controllers/getAll');
const allGetbyId = require('../controllers/getByIdAll');

const router = Router();


router.get('/assetStatuses', allGet);

router.get('/assetStatuses/:id', allGetbyId);


module.exports = router; 