import React from "react";
import './index.css';

export default () => {
    return (
        <div className="content">
            <div className="content-image">
                <img 
                    src="https://img.freepik.com/fotos-gratis/uma-pintura-de-dois-cogumelos-com-uma-tampa-amarela-e-uma-tampa-vermelha_1340-23211.jpg"
                    alt="/"
                    style={{
                        width: '190px',
                        height: '180px'
                    }}
                />
            </div>

            <div className="content-description">
                <h2>Nome do produto</h2>
                    <div className="content-price">

                        <h4>R$90,00</h4>

                    </div>
                <p>Descrição do conteúdo</p>
            </div>

        </div>
    ); 
}