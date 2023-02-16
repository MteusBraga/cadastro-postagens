const Sequelize = require("sequelize")
const sequelize = new Sequelize('sistemadecadastro', 'root', '1964', {
    host: 'localhost',
    dialect:'mysql'
})

//postagem model
const Postagem = sequelize.define('postagens', { 
    titulo: {
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})
/*
Postagem.create({
    titulo: "Titulo1",
    conteudo: "Lorem ipsum"
})
*/

//Postagem.sync({force: true}) //criar a tabela

//usuarios model
const Usuario = sequelize.define('usuarios', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})
/*
Usuario.create({
    nome:"Mateus",
    sobrenome:"Braga",
    idade: 20,
    email:"mateus.braga@gmail.com"
})
*/

//Usuario.sync({force: true}) //criar a tabela

