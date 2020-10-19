import React, { useState } from 'react'
import './style/soldado.css'
import ImageCt from './images/ct.png'
import ImageT from './images/t.png'


export default (props) => {

    return(
        <div id="area-soldado">
            < img src={props.img == "ImageCt"?ImageCt:ImageT} alt="CT" />
        </div>
    )
}