import React from 'react'
import { Link } from 'react-router-dom'
import './style/navbar.css'
import Logo from './images/logo-cs.png'

export default () => {
    return(
        <nav className="NavBar color-navbar ">
          <div></div>
          <div class="nav-wrapper tamanho">
            <img src={Logo} alt="logo cs" class="brand-logo config-logo"/>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><Link to ="/access">Change Team</Link></li>
              <li><Link to ="/contato">Developers</Link></li>
              <li><Link to ="/">Logout</Link></li>
            </ul>
          </div>
          <div></div>
      </nav>
    )
}