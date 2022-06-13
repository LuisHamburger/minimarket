const express = require('express');
const router = express.Router();


/**
 *  Routes: /home
 */

router.get('/minimarket/:id/contact', (req, res) => {

    const contacto = {
        celular: 123456789,
        soporte: "l@l.com",
        ubicacion: "QWERTYUIOPPOIUYTDFGHJHGF"
    }

    res.render('Contact/contact', {
        contacto
    });
});



module.exports = router;
