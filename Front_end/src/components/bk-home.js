import React from 'react'
import './style/bk-home.css'
import Backgroun_home from './images/background_home.jpeg'

export default () => {
    return(
        <div className="background-home">
            <div className="fundo_trasparente"></div>
            < img src={Backgroun_home} alt="background-home"/>
        </div>
    )
}