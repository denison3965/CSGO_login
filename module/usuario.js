const db = require('./db')

const Usuario = db.sequelize.define('usuarios',{
    name:{
        type: db.Sequelize.STRING
    },
    age:{
        type: db.Sequelize.STRING
    },
    username:{
        type:db.Sequelize.STRING
    },
    email:{
        type:db.Sequelize.STRING
    },
    password:{
        type:db.Sequelize.STRING
    }
})



module.exports = Usuario
//Usuario.sync({force:true})