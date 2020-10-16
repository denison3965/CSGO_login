import React from 'react';
import './style/acesso.css';
import CT from './images/CT.jpg';
import Terrorist from './images/Terrorist.jpg';

export default () => {
    return(

    <div className="div_pai">

        <button className="selection">
            <img src={Terrorist} alt="Terrorist" width="100%" height="95%" id="border_img"></img>
            <p className='texto'>Terrorist</p>
        </button>

        <button className="selection">
            <img src={CT} alt="CounterTerrorist" width="100%" height="95%" id="border_img"></img>
            <p className='texto'>Counter-Terrorist</p>
        </button>

    </div>

)
}