const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const Usuario = require('./module/usuario')
const session = require("express-session")
const flash = require("connect-flash")
const cors = require('cors')

//Configuracao 

//Configuracao do mei cors como midleware para dizer quias URL poderam exetucar requisicao ao nosso back end
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")

    res.header("Acces-Control-Allow-Methods", "GET,POST")
    app.use(cors())
    next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Rotas
app.get("/", (req, res) => {
    res.send("Esta tudo ok por aqui")
})

app.get("/login", (req, res, next) => {
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

app.get("/equipe", (req, res) => {
    res.send("Está tudo ok aqui")
})

app.get("/armas", VerificaJWT, (req, res, next) => {
    res.sendFile(__dirname + "/module/armas.json")
})

//função que verifica se o JWT está Ok 
function VerificaJWT(req, res, next){
    var token = req.headers['x-access-token']
    if (!token)
     return res.status(401).send({auth: false, message: 'Token não informado'})

     jwt.verify(token, process.env.SECRET, function(err, decoded){
        if(err)
        return res.status(500).send({auth: false, message: 'Token invalido'})
        
        req.UsuarioId = decoded.id
        console.log("Usario Id:" + decoded.id)
        next()
     })
}
        app.use(express.static(__dirname + "/Front_end"))

const porta = 3001
app.listen(porta, () => {
    console.log("O servidor esta escutando na portal " + porta)
})
