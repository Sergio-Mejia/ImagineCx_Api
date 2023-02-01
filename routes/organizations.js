const { Router } = require('express');
const allDelete = require('../controllers/deleteAll');
const { allGet } = require('../controllers/getAll');
const allGetbyId = require('../controllers/getByIdAll');
const { organizationsPatch } = require('../controllers/organizations');



const router = Router();



router.get('/organizations', allGet);

router.get('/organizations/:id',allGetbyId);

router.patch('/organizations/:id', organizationsPatch);

router.delete('/organizations/:id', allDelete);


module.exports = router; 