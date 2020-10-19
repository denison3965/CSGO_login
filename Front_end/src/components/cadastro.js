import React, { useState } from 'react';
import './style/cadastro.css';
import logo from './images/logo-cs.png'
import axios from 'axios'

export default () => {

    const [name, setName] = useState()
    const [username, setUserName]= useState()
    const [password, setPassword] = useState()
    const[age, setAge] = useState()
    const [email, setEmail] = useState()


    let params = {
        name: name,
        username: username,
        password: password,
        age: age,
        email: email
    }

    function enviarFormulario() {
        axios.post('/formulario', params).then(result => {
            console.log(result.data)
           
        })
    }

    return(
        <div className="mybody">

            <div className="login">
                <div className="arealogo">
                    <div></div>
                    <img src={logo} height="43px" width="90px" className="logocs"/>
                    <div></div>
                </div>
                
                <div className="login-box">
                    <h1>Register</h1>

                    <div class="textbox">
                        <i class="fas fa-address-card"></i>
                        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
                    </div>

                    <div class="textbox">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Username" onChange={e => setUserName(e.target.value)}/>
                    </div>

                    <div class="textbox">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </div>

                    <div class="textbox">
                        <i class="fas fa-birthday-cake"></i>
                        <input type="number" placeholder="Age" onChange={e => setAge(e.target.value)}/>
                    </div>

                    <div class="textbox">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                    </div>

                    
                    <input type="button" class="btn_enter" value="Create an Account" onClick={enviarFormulario}/>
                    <a href="/"><input type="button" class="btn_roxo" value="Back to Login"/></a>

                </div>
            </div>
        </div>
    )
}