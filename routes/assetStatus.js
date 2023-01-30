const { Router } = require('express');
const {assetStatusGetbyId } = require('../controllers/assetStatus');
const { allGet } = require('../controllers/getAll');

const router = Router();


router.get('/assetStatuses', allGet);

router.get('/assetStatuses/:id', assetStatusGetbyId);


module.exports = router; 