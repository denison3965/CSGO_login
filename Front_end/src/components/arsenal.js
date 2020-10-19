import React from 'react'
import Navegation from './navegation_slide'
import './style/arsenal.css'

export default () => {
    return(
        <div className="arsenal">
            <div className="info_area">
                <h4>Soldier's name</h4>
                <a class="btn-floating green pulse"><i class="material-icons">add_shopping_cart</i></a>
            </div>

            <Navegation />
        </div>
        
    )
}