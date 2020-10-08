const express = require('express')
const app = express()

//Configuracao 
    //Rotas
        app.get("/", (req, res) => {
            res.send("Esta tudo funcionando por aqui")
        })
        app.use(express.static(__dirname + "/client"))
        

const porta = 8081
app.listen(porta, () => {
    console.log("O servidor esta escutando na portal " + porta)
})
