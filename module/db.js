const Sequelize = require('sequelize')
//conexão com o banco de dados mysql
const sequelize = new Sequelize('cadastrados', 'root', '',{
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log("O banco de dados foi conectado com sucesso")
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}