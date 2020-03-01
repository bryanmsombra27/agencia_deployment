//importando el modelo
const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.consultasHomePage =async (req, res) => {  //debemos crear una carpeta con el mismo nombre con el cual estamos declarando la renderizacion
    const viajes = await Viaje.findAll({ limit: 3 });
    const testimoniales =  await Testimonial.findAll({limit: 3  });
        res.render('index', {
        pagina: 'Proximos Viajes',
        clase:'home', 
        viajes, //variables de entorno que solo funcionaran en la vista
        testimoniales
    })
    
 
 }