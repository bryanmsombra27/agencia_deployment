//importar express configurando el archivo de rutas
const express = require('express');
const router = express.Router();


//controladores
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialController = require('../controllers/testimonialController');
//exportamos
module.exports  = function() {
       
router.get('/', homeController.consultasHomePage );
router.get('/nosotros',nosotrosController.infoNosotros );
//todos los viajes 
router.get('/viajes', viajesController.mostrarViajes );
//trae un solo viaje por Id
router.get('/viajes/:id',viajesController.mostrarViaje);
router.get('/testimoniales',testimonialController.mostrarTestimoniales );
//cuando se llena el formulario de testimoniales
router.post('/testimoniales', testimonialController.agregarTestimonial);




return router;  

}

