import React from "react";
import './index.css'

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default () => {
    return (
        <div className="content">
            <div className="content-image">
                <img 
                    src="https://img.freepik.com/fotos-gratis/uma-pintura-de-dois-cogumelos-com-uma-tampa-amarela-e-uma-tampa-vermelha_1340-23211.jpg"
                    alt="/"
                    style={{
                        width: '210px',
                        height: '185px'
                    }}
                />
            </div>

            <div className="content-description">
                <h2>Nome do produto</h2>
                    <div className="content-price">

                        <h1>R$90,00</h1>

                        <div className="arrow-left">
                            <KeyboardBackspaceIcon style={{
                                width: '23px',
                                height: '23px'
                            }}/>
                        </div>

                        <h3><s>R$98,79</s></h3>
                        
                    </div>
                <p>Descrição do conteúdo</p>
            </div>

        </div>
    )
}