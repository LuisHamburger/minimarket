const express = require('express');
const router = express.Router();
const axios = require("axios");


/**
 *  Routes: /home
 */

router.get('/minimarket/:id', (req, res) => {

    const customerStatus = true;

    const productos = [
        {
            id: 1,
            nombre_1: "Chivas Regal Whisky 12 Años Botella 750ml",
            precio_venta: 95,
            stock: 10,
            imagen_1: "/images/chivas.jpg"
        },
        {
            id: 1,
            nombre_1: "Chivas Regal Whisky 12 Años Botella 750ml",
            precio_venta: 95,
            stock: 10,
            imagen_1: "/images/chivas.jpg"
        },
        {
            id: 1,
            nombre_1: "Chivas Regal Whisky 12 Años Botella 750ml",
            precio_venta: 95,
            stock: 10,
            imagen_1: "/images/chivas.jpg"
        },
        {
            id: 1,
            nombre_1: "Chivas Regal Whisky 12 Años Botella 750ml",
            precio_venta: 95,
            stock: 10,
            imagen_1: "/images/chivas.jpg"
        },
        {
            id: 1,
            nombre_1: "Chivas Regal Whisky 12 Años Botella 750ml",
            precio_venta: 95,
            stock: 10,
            imagen_1: "/images/chivas.jpg"
        },
        {
            id: 1,
            nombre_1: "Chivas Regal Whisky 12 Años Botella 750ml",
            precio_venta: 95,
            stock: 10,
            imagen_1: "/images/chivas.jpg"
        }
    ]



    res.render('Home/home', {
        productos
    });
});



module.exports = router;
