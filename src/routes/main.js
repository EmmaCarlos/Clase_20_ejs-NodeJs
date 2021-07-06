
const express = require('express')
const router= express.Router();
const main= require('../controllers/main');

router.get("/", main.index);
// puede ser /detalle /:category /:id  rutas que van a mostrar 
//una vista de manera dinamica qu enosotros querramos mostrar
router.get("/detalle/:idDetalle", main.detalleMenu);
router.get("/detalle/", main.detalleMenu)
module.exports = router;

/*
req.params.id
*/