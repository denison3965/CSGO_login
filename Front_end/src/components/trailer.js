import React from 'react'
import './style/trailer.css'
import video from './videos/intro.mp4'


export default () => {
    return(
        <div>
            <video id="filme" autoPlay={true} loop={true} >
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    )
}