import React, { useState, useEffect }from 'react';
import Backgroun_home from '../components/bk-home'
import Soldado from '../components/soldado'
import NavBar from '../components/navbar'
import Arsenal from '../components/arsenal'
import { Link } from 'react-router-dom'

import Cookies from 'universal-cookie'

const cookies = new Cookies()

export default (props) => {
    const headers = new Headers()

    headers.append('x-access-token', cookies.get('tokeJWT'))
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');

    const [dadosDaApi, setDadosDaApi] = useState()


    useEffect(()=> {

        console.log(cookies.get('tokeJWT'))

        fetch('http://localhost:3001/armas', {
            method: 'GET',
            headers: headers

        }).then((res) => {

            //Verificando se o status da minha requisicao foi bem sucedido
            if(res.status == 200){
                //se sim continua o progrma
                const json = res.json()
                
                return json
            }else{
                //se nao, vouta para a pagina inicial
                window.location.replace("http://localhost:3000/")
            }

        }).then((json) => { 

            console.log(json)
            //setando o json que veio da minha api para enviar para um componente renderizar
            setDadosDaApi(json)

        }).catch((err) => {
            console.log("ocoreu um erro" + err)
        })
    },[])
    return(
        <div>
            <Backgroun_home />
            <NavBar />
            <Soldado img={props.img}/>
            <Arsenal />
        </div>
    )
}