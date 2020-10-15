import React, { useState, useEffect } from 'react';
import './style/login.css';
import logo from './images/logo-cs.png';
import axios from 'axios'


export default () => {

    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const [token, setToken] = useState()


    function enviarFormulario() {
        axios.post('/verificar', { username : userName, password: password}).then(result => {
            console.log(result.data)
            setToken(result.data)
            console.log(token)

        })
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
                                <input type="text" placeholder="Username" name="username" onChange={e => setUserName(e.target.value)}/>
                            </div>

                            <div class="textbox">
                                <i class="fas fa-lock"></i>
                                <input type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)}/>
                            </div>

                            <input type="button" class="btn" value="Enter" onClick={enviarFormulario}/>
                            <a href="/register"><input type="button" class="btn_roxo" value="Register"/></a>
                        </form>
                        
                    </div>
                </div>
        </div>

    )
}