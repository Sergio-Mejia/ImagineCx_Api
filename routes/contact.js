const { Router } = require('express');
const { contactGetbyId, contactPatch } = require('../controllers/contact');
const allDelete = require('../controllers/deleteAll');
const { allGet } = require('../controllers/getAll');



const router = Router();



router.get('/contacts', allGet);

router.get('/contacts/:id',contactGetbyId);

router.patch('/contacts/:id', contactPatch);

router.delete('/contacts/:id', allDelete);


module.exports = router; 