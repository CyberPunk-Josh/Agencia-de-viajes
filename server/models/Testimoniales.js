const Sequelize = require('sequelize');

const db = require('../config/database');

// creando el modelo de la tabla, previamente creado em SQL:

const Testimonial = db.define('testimoniales', {
    nombre:{
        type: Sequelize.STRING
    },
    correo:{
        type: Sequelize.STRING
    },
    mensaje:{
        type: Sequelize.STRING
    },
});
module.exports = Testimonial;