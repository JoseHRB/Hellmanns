import React from "react";
import './index.css';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ProductProperties from "../productProperties/index";

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

                        <ProductProperties />

                        <ProductProperties />

                        <ProductProperties />
                        
                        <ProductProperties />
                </div>

            </div>

            <div className="main-section">

                <div className='sections'>

                    <ProductProperties />

                    <ProductProperties />

                    <ProductProperties />

                    <ProductProperties />

                    <ProductProperties />

                </div>

                <div className='sections'>

                   <ProductProperties />

                   <ProductProperties />

                   <ProductProperties />

                   <ProductProperties />

                   <ProductProperties />
                   
                </div>
               
            </div>

        </div>
    );
}