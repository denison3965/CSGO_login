import React from 'react';
import './style/login.css'
import video from './videos/intro.mp4'

export default () => {
    return(
        <div className="mybody">
            <header>
                <video id="background" autoPlay={true} loop={true} >
                    <source src={video} type="video/mp4"/>
                </video>
            </header>
        </div>

    )
}