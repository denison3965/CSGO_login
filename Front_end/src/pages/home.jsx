import React from 'react';
import Backgroun_home from '../components/bk-home'
import Soldado from '../components/soldado'
import NavBar from '../components/navbar'
import Arsenal from '../components/arsenal'

export default () => {
    return(
        <div>
            <Backgroun_home />
            <Soldado />
            <NavBar />
            <Arsenal />
        </div>
    )
}