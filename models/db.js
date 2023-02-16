const Sequelize = require("sequelize")
//Conexao com o banco de dados MySQL
    const sequelize = new Sequelize('postapp', 'root', '1964', {
        host: 'localhost',
        dialect:'mysql'
    })

module.exports={
    Sequelize: Sequelize,
    sequelize: sequelize
}