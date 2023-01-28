const { Router } = require('express');
const { accountsGet, 
        accountGetbyId, 
        accountPatch, 
        accountDelete } = require('../controllers/accounts');

const router = Router();


router.get('/accounts', accountsGet);

router.get('/accounts/:id', accountGetbyId);

router.patch('/accounts/:id', accountPatch);

router.delete('/accounts/:id', accountDelete)


module.exports = router;