exports.infoNosotros =   (req, res) => { 
    res.render('nosotros',  {
        //variable de entorno solo funcionara en esta vista
        pagina: 'Sobre Nosotros'
    });
}