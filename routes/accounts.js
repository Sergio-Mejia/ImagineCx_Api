const { Router } = require('express');
const {accountGetbyId, 
        accountPatch, 
        accountDelete } = require('../controllers/accounts');
const { allGet } = require('../controllers/getAll');

const router = Router();


router.get('/accounts', allGet);

router.get('/accounts/:id', accountGetbyId);

router.patch('/accounts/:id', accountPatch);

router.delete('/accounts/:id', accountDelete)


module.exports = router;