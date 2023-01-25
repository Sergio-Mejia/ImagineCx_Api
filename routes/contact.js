const { Router } = require('express');
const {contactGet, contactPut, contactDelete } = require('../controllers/contact');


const router = Router();


router.get('/contact', contactGet);

router.put('/:id', contactPut);

router.delete('/', contactDelete);


module.exports = router;