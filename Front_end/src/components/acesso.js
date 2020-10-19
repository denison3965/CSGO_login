import React from 'react';
import './style/acesso.css';
import CT from './images/CT.jpg';
import Terrorist from './images/Terrorist.jpg';
import {BrowserRouter as Roter, Route, Link} from 'react-router-dom'

import Home from '../pages/home'

export default () => {
    return(

    <div className="div_pai">

        <Link to="arsenal-t" >
            <button className="selection">
                <img src={Terrorist} alt="Terrorist" width="100%" height="95%" id="border_img"></img>
                <p className='texto'>Terrorist</p>
            </button>
        </Link>

        <Link to="arsenal-ct" >
            <button className="selection">
                <img src={CT} alt="CounterTerrorist" width="100%" height="95%" id="border_img"></img>
                <p className='texto'>Counter-Terrorist</p>
            </button>
        </Link>
    </div>

)
}