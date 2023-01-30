const { Router } = require('express');
const { contactPatch } = require('../controllers/contact');
const allDelete = require('../controllers/deleteAll');
const { allGet } = require('../controllers/getAll');
const allGetbyId = require('../controllers/getByIdAll');



const router = Router();



router.get('/contacts', allGet);

router.get('/contacts/:id',allGetbyId);

router.patch('/contacts/:id', contactPatch);

router.delete('/contacts/:id', allDelete);


module.exports = router; 