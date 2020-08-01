const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');
exports.consultasHomePage = async (req, res) => {
    // cargar los viajes
    //limita la busqueda de la BD a solo 3 elementos
    //Esto lee los elementos de la BD)
    const viajes = await Viaje.findAll({ limit: 3})
    
    // cargar los testimoniales
    //limita la busqueda de la BD a solo 3 elementos
    //Esto lee los elementos de la BD)
    const testimoniales = await Testimonial.findAll({limit: 3})
    res.render('index', {
        pagina: 'Proximos Viajes',
        clase: 'home',
        viajes,
        testimoniales
    })
};
