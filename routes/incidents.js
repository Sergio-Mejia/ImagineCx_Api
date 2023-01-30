const { Router } = require('express');
const { allGet } = require('../controllers/getAll');
const { incidentDelete, incidentGetbyId, incidentPatch } = require('../controllers/incidents');



const router = Router();



router.get('/incidents', allGet);

router.get('/incidents/:id',incidentGetbyId);

router.patch('/incidents/:id', incidentPatch);

router.delete('/incidents/:id', incidentDelete);


module.exports = router; 