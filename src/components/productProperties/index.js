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
                <h1>R$97,00</h1>
                <p>Descrição do conteúdo</p>
            </div>

        </div>
    );
}