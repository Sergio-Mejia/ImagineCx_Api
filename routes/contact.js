const { Router } = require('express');
const {contactGet, contactPut, contactDelete, contactGetbyId } = require('../controllers/contact');


const router = Router();


router.get('/contact/', contactGet);


router.get('/contact/:id',contactGetbyId);


router.put('/:id', contactPut);

router.delete('/contact/:id', contactDelete);


module.exports = router;