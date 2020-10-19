import React, { useState, useEffect }from 'react';
import BackgroundImg from '../components/bk-acesso.js'
import Acesso from '../components/acesso.js'
import MainPage from './mainPage'

import Cookies from 'universal-cookie'

const cookies = new Cookies()


export default () => {
    const headers = new Headers()

    headers.append('x-access-token', cookies.get('tokeJWT'))
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');

    useEffect(()=> {

        console.log(cookies.get('tokeJWT'))

        fetch('http://localhost:3001/armas', {
            method: 'GET',
            headers: headers

        }).then((res) => {
            if(res.status == 200){
                //Aqui eu utilizarei os dados da mimnha api
                console.log("Deu certo")
            }
            else{
                window.location.replace("http://localhost:3000/")
            }

        }).catch((err) => {
            console.log("ocoreu um erro" + err)
        })
    },[])
    return(
        <div>
            <BackgroundImg />
            <Acesso />
        </div>

    )
}
