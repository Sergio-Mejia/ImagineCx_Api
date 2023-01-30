const { Router } = require('express');
const { contactDelete, contactGetbyId, contactPatch } = require('../controllers/contact');
const { allGet } = require('../controllers/getAll');



const router = Router();



router.get('/contacts', allGet);

router.get('/contacts/:id',contactGetbyId);

router.patch('/contacts/:id', contactPatch);

router.delete('/contacts/:id', contactDelete);


module.exports = router; 