//importando modelo
const Viaje = require('../models/Viajes');

//muestra todos los viajes
exports.mostrarViajes = async (req, res) => {  
   const viajes = await Viaje.findAll() //await detiene la ejecucion de la siguiente linea de codigo hasta que no se traiga los resultaos de la base de datos puede continuar con la siguiente instruccioon
   res.render('viajes', {
    pagina: 'Proximos Viajes',
    viajes
})
    
}
//muestra un solo viaje
exports.mostrarViaje =async (req, res) => { 
   const viaje = await Viaje.findByPk(req.params.id) //await detiene la ejecucion de la siguiente linea de codigo hasta que no se traiga los resultaos de la base de datos puede continuar con la siguiente instruccioon
   res.render('viaje',{
    viaje
})
}