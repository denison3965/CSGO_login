const Sequelize = require('sequelize')
const sequelize = new Sequelize('cadastrados', 'root', '123123',{
    host: "localhost",
    dialect: 'mysql'
})

// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesso")
// }).catch(function(erro){
//     console.log("Falha ao conectar:"+erro)
// })

const Usuario = sequelize.define('usuarios',{
    name:{
        type:Sequelize.STRING
    },
    age:{
        type:Sequelize.STRING
    },
    username:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    }
})

Usuario.sync({force:true})