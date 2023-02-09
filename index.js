const express = require("express");
const app = express()

//rotas
app.get("/", function(req, res){
    res.send("Hello!")
})

app.get("/sobre", function(req,res){
    res.send("Minha pagina sobre")
})

app.get("/blog", function(req,res){
    res.send("Bem vindo ao meu blog")
})

app.get("/ola/:cargo/:nome/:cor", function(req, res){
    res.send(`<h1>Ola ${req.params.nome}!</h1> <h2>Seu cargo é: ${req.params.cargo}</h2> <h2>Sua cor favorita é: ${req.params.cor}`)
})

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081")
}) //ultima linha
//funcao de callback é uma funcao que é utilizada sempre que tal evento é disparado