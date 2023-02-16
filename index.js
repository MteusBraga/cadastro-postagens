const express = require("express");
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require("sequelize")



//Config
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //Conexao com o banco de dados MySQL
    const sequelize = new Sequelize('sistemadecadastro', 'root', '1964', {
        host: 'localhost',
        dialect:'mysql'
    })
//Rotas
    app.get('/cad', function(req,res){
        res.render('layouts/formulario')
    })

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081")
}) 
