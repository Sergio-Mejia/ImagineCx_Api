const { Router } = require('express');
const {accountPatch } = require('../controllers/accounts');
const allDelete = require('../controllers/deleteAll');
const { allGet } = require('../controllers/getAll');
const allGetbyId  = require('../controllers/getByIdAll');

const router = Router();


router.get('/accounts', allGet);

router.get('/accounts/:id', allGetbyId);

router.patch('/accounts/:id', accountPatch);

router.delete('/accounts/:id', allDelete)


module.exports = router;