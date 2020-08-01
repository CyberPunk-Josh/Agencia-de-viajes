const express = require('express');
const router = express.Router();
// const Sequelize = require('sequelize');

// importar los controladores
const nosotrosContoller = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonioController = require('../controllers/testimonialesController');

module.exports = function () {
    router.get('/', homeController.consultasHomePage);
    
        


    router.get('/nosotros',nosotrosContoller.infoNosotros);

    router.get('/viajes', viajesController.mostrarViajes);

    // Vistas para cada viaje:
    router.get('/viajes/:id', viajesController.mostrarViaje);

    router.get('/testimoniales',testimonioController.mostrarTestimoniales);

    // cuando se llena el formulario
    router.post('/testimoniales', testimonioController.agregarTestimonial);

    return router;
};


