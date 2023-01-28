const { Router } = require('express');
const {contactGet, contactDelete, contactGetbyId, contactPatch } = require('../controllers/contact');



const router = Router();



router.get('/contact', contactGet);

router.get('/contact/:id',contactGetbyId);

router.patch('/contact/:id', contactPatch);

router.delete('/contact/:id', contactDelete);
// router.get('*', (req, res) => {
//     res.json({
//         msg: " Ruta no existe"
//     })
// })



module.exports = router; 