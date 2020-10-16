const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const Usuario = require('./module/usuario')
const session = require("express-session")
const flash = require("connect-flash")

//Configuracao 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Rotas
app.get("/", (req, res) => {
    res.send("Esta tudo ok por aqui")
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/module/login.html")
})


app.get("/cadastro", (req, res) => {
    res.sendFile(__dirname + "/module/formulario.html")
})

app.post("/formulario", (req, res) => {

        Usuario.create({
        name: req.body.name,
        age: req.body.age,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then(function () {
        res.send("Usuario criado com sucesso!")
    }).catch(function (erro) {
        res.send("houve um erro:" + erro)
    })
})



app.post("/verificar", (req, res) => {
    Usuario.findOne({ where: { username: req.body.username } }).then((usuario) => {
        if (usuario) {
            Usuario.findOne({ where: { password: req.body.password } }).then((password) => {
                if (password) {
                    var token = jwt.sign({ID : usuario.id}, process.env.SECRET,{
                        expiresIn:300
                    })
                    res.send(token)
                } else {
                    res.send("Senha invalida ou username invalido")
                }
                 return res.json({auth:true, token: token})
            })
        } else {
            res.send("Senha invalida ou username invalido")
        }
    })
})

// app.get("/armas", (req, res) => {
//     res.send("Escolha uma arma")
// })

app.get("/armas", (req, res) => {
    res.sendFile(__dirname + "/module/armas.json")
})



app.use(express.static(__dirname + "/Front_end"))


        

const porta = 3001
app.listen(porta, () => {
    console.log("O servidor esta escutando na portal " + porta)
})
