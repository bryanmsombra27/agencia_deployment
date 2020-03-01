//importando sequelize
const Sequelize = require('sequelize');

  //importando configuracion de la BD
  const db = require('../config/database');

  //conectando y verificando que exista la conexion hacia la BD solo sirve probar la autenticacion hacia la BD
    //db.authenticate().then( () => console.log('Db conectada')  ).catch( error => console.log(error));

    //definicion del modelo de la BD 
const Viaje  =  db.define('viaje', {
     titulo: {
         type: Sequelize.STRING
     },
     precio: {
         type:Sequelize.STRING
     },
    fecha_ida:{
        type: Sequelize.DATE
    },
    fecha_vuelta:{
        type: Sequelize.DATE
    },
    imagen:{
        type: Sequelize.STRING
    },
    descripcion:{
        type: Sequelize.STRING
    },
    disponibles:{
        type: Sequelize.STRING
    },
    createdAt:{
        type: Sequelize.DATE
    },
    updatedAt:{
        type: Sequelize.DATE
    }
})


//exportando el modelo para poder ser utilizado en otro archivo de JS
module.exports = Viaje;