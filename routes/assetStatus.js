const { Router } = require('express');
const { assetStatusGet,
        assetStatusGetbyId } = require('../controllers/assetStatus');

const router = Router();


router.get('/assetStatus', assetStatusGet);

router.get('/assetStatus/:id', assetStatusGetbyId);


module.exports = router; 