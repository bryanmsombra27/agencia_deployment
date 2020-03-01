    //Configuracion del servidor 


    //crear servidor de express
    const express = require('express');
    const path = require('path');
    const routes =require('./routes');
    const bodyParser = require('body-parser');

    const configs = require('./config');

  

    

    //configurar express 
    const app = express();

    //habilitar pug //templates
    app.set('view engine', 'pug');


    //añadir las vistas 
    app.set('views', path.join(__dirname, './views'));

    //validar si estamos en desarrollo o en produccion
    const config = configs[app.get('env')];

    //creamos la variable para el sitio web 
    app.locals.titulo = config.nombresitio;

    //cargar una carpeta estatica llamada public 
    app.use(express.static('public'));

    //muestra el año actual y genera la ruta
    app.use( (req,res,next) => {
        //crear una nueva fecha
        const fecha = new Date();
        //creando una variable interna de  node 
        res.locals.fechaActual = fecha.getFullYear();
       res.locals.ruta =req.path;
        return next();
    })
//ejecutamos el body parser
app.use(bodyParser.urlencoded({extended:true}))

    // //use:  responde a todos los verbos de HTTP(GET,POST,PUT,DELETE) recibe todas las peticiones de http, cargando las rutas  que vienen del archivo de index.js -rutas
    app.use('/', routes());

    //puerto y host para la app
    const host = process.env.HOST || '0.0.0.0'; 
    const port = process.env.PORT || 3000; 
    app.listen(port, host, () => console.log('servidor Funcionando'));