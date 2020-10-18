import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './style/login.css';
import logo from './images/logo-cs.png';
import axios from 'axios'
import Cookies from 'universal-cookie'
import { Redirect } from 'react-router-dom';

const cookies = new Cookies()


export default () => {

    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const [token, setToken] = useState()
    const [error_msg, setError_msg] = useState()


    function enviarFormulario() {
        axios.post('/verificar', { username : userName, password: password}).then(result => {

            console.log(result)

            //Setando o meu Cookie com o meu token vindo do servidor
            cookies.set('tokeJWT', result.data, { path: '/'})
            console.log(cookies.get('tokeJWT'))

            //Se realmente recebermos um token entramos na pagina de selecao
            if(result.data != "Senha invalida ou username invalido"){

                //redirecionando para a pagina do usuario com suas armas se o servidor me trazer um token
                window.location.replace("http://localhost:3000/access")
                
            }
            else{
                setError_msg(result.data)
            }
            
        }).catch((err) => {console.log("Houve um erro: "+ err)})
    }

    function teste() {
        fetch('http://localhost:8081/', {
            method: 'GET'
        }).then((res) => { console.log("Deu certo")})

    }

    return(
        <div className="mybody">

                <div className="login2">
                    <div className="arealogo">
                        <div></div>
                        <img src={logo} height="43px" width="90px" className="logocs"/>
                        <div></div>
                    </div>
                    
                    <div className="login-box">
                        <h1>Login</h1>

                        <form method="POST" action="/verificar">
                            <div class="textbox">
                                <i class="fas fa-user"></i>
                                <input className="my_input" type="text" placeholder="Username" name="username" onChange={e => setUserName(e.target.value)}/>
                            </div>

                            <div class="textbox">
                                <i class="fas fa-lock"></i>
                                <input className="my_input" type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)}/>
                            </div>

                            <input type="button" class="btn_enter" value="Enter" onClick={enviarFormulario}/>
                            <Link to="/register"><input type="button" class="btn_roxo" value="Register"/></Link>

                        </form>
                        <div>
                        {error_msg != null? <div className="alert alert-danger">{error_msg}</div>: null}
                       </div>
                    </div>
                </div>
        </div>

    )
}