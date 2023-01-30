const { Router } = require('express');
const {accountGetbyId, 
        accountPatch } = require('../controllers/accounts');
const allDelete = require('../controllers/deleteAll');
const { allGet } = require('../controllers/getAll');

const router = Router();


router.get('/accounts', allGet);

router.get('/accounts/:id', accountGetbyId);

router.patch('/accounts/:id', accountPatch);

router.delete('/accounts/:id', allDelete)


module.exports = router;