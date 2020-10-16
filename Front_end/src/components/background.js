import React from 'react'
import './style/background.css'
import imagem from './images/bk-cadastro.png';
import imagem2 from './images/bk-cadastro2.png';
import imagem3 from './images/bk-cadastro3.png';
import imagem4 from './images/bk-cadastro4.png';
import imagem5 from './images/bk-cadastro5.jpg';


export default () => {
    return(
        <header>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 img" src={imagem} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img" src={imagem2}  alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img" src={imagem3}  alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img" src={imagem4}  alt="Fourth slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img" src={imagem5} alt="Fifth slide" />
                    </div>
                </div>
            </div>
        </header>
    )
}
