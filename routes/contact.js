const { Router } = require('express');
const {contactGet, contactPut, contactDelete } = require('../controllers/contact');


const router = Router();


router.get('/contact/:id', contactGet);

router.put('/:id', contactPut);

router.delete('/contact/:id', contactDelete);


module.exports = router;