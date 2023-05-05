import React from "react";
import './index.css';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ProductDescrip from "../productDescrip/index";

export default () => {
    return (
        <div className='app-body'>

            <div className="system-msg">mensagem de boas vindas(opcional)</div>

            <div className='app-conteiner'>

                <div className='side-categories'>

                    <div className="sc-header">
                        <div className="sc-icon">
                            <FormatListBulletedIcon
                                style={{
                                    width: '40px',
                                    Height: '40px'
                                }}
                            />
                        </div>
                        <div className='sc-title'>
                            Categorias
                        </div>
                    </div>

                    <div className="sc-content">
                        <div className='sc'>sideCategories2</div>
                        <div className='sc'>sideCategories3</div>
                        <div className='sc'>sideCategories4</div>
                        <div className='sc'>sideCategories5</div>
                    </div>

                </div>

                <div className='app-hots'>
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
                        <ProductDescrip/>
                    </div>
                    

                    <div className="content">
                        2
                    </div>

                    <div className="content">
                        3
                    </div>
                    <div className="content">
                        4
                    </div>
                </div>

            </div>

            <div className="main-section">

                <div className='sections'>

                    <div className="content">
                        1
                    </div>

                    <div className="content">
                        2
                    </div>

                    <div className="content">
                        3
                    </div>
                    <div className="content">
                        4
                    </div>
                    <div className="content">
                        5
                    </div>
                </div>

                <div className='sections'>

                    <div className="content">
                        6
                    </div>

                    <div className="content">
                        7
                    </div>

                    <div className="content">
                        8
                    </div>
                    <div className="content">
                        9
                    </div>
                    <div className="content">
                        10
                    </div>
                </div>
               
            </div>

        </div>
    );
}