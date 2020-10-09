const Sequelize = require('sequelize')
//conexão com o banco de dados mysql
const sequelize = new Sequelize('cadastrados', 'root', '123123',{
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}