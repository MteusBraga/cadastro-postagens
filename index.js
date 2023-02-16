const express = require("express");
const app = express()
const handlebars = require('express-handlebars')

//Config
    //Template Engine
    app.engine('handlebars', handlebars({default: 'main'}))
    app.set('view engine', 'handlebars')

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081")
}) //ultima linha
//funcao de callback é uma funcao que é utilizada sempre que tal evento é disparado