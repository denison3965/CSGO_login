import React from 'react'
import './style/navbar.css'
import Logo from './images/logo-cs.png'

export default () => {
    return(
        <nav className="NavBar color-navbar ">
          <div></div>
          <div class="nav-wrapper tamanho">
            <img src={Logo} alt="logo cs" class="brand-logo config-logo"/>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
          <div></div>
      </nav>
    )
}