import React from 'react';
import './style/login.css'
import logo from './images/logo-cs.png'


export default () => {
    return(
        <div className="mybody">

                <div className="login">
                    <div className="arealogo">
                        <div></div>
                        <img src={logo} height="43px" width="90px" className="logocs"/>
                        <div></div>
                    </div>
                    
                    <div className="login-box">
                        <h1>Login</h1>
                        <div class="textbox">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username"/>
                        </div>

                        <div class="textbox">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password"/>
                        </div>

                        <input type="button" class="btn" value="Entrar"/>
                        <input type="button" class="btn_roxo" value="Cadastrar"/>

                    </div>
                </div>
        </div>

    )
}