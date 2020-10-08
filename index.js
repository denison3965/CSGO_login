const express = require('express')
const app = express()

//Configuracao 
    //Rotas
        app.get("/", (req, res) => {
            res.send("Esta tudo ok por aqui")
        })

        app.get("/login", (req, res) => {
            res.send("Aqui o Login")
        })

        app.get("/cadastro", (req, res) => {
            res.send("Aqui o Cadastro")
        })

        app.get("/Equipe", (req, res) => {
            res.send("Escolha da equipe")
        })

        app.use(express.static(__dirname + "/cliente"))


        

const porta = 8081
app.listen(porta, () => {
    console.log("O servidor esta escutando na portal " + porta)
})
