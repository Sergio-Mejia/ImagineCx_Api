const { Router } = require('express');
const {incidentGet, incidentDelete, incidentGetbyId, incidentPatch } = require('../controllers/incidents');



const router = Router();



router.get('/incident', incidentGet);

router.get('/incident/:id',incidentGetbyId);

router.patch('/incident/:id', incidentPatch);

router.delete('/incident/:id', incidentDelete);


module.exports = router; 