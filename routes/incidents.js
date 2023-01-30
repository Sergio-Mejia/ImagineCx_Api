const { Router } = require('express');
const allDelete = require('../controllers/deleteAll');
const { allGet } = require('../controllers/getAll');
const allGetbyId = require('../controllers/getByIdAll');
const { incidentGetbyId, incidentPatch } = require('../controllers/incidents');



const router = Router();



router.get('/incidents', allGet);

router.get('/incidents/:id',allGetbyId);

router.patch('/incidents/:id', incidentPatch);

router.delete('/incidents/:id', allDelete);


module.exports = router; 