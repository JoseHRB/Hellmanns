import React from 'react';
import './App.css';

import Header from './components/header/index.js';
import Footer from './components/footer/index.js';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ProductDefault from "./components/productDefault/index";
import ProductHots from "./components/productHots/index";

export default () => {

  return (

    <div className='app-window'>
      
        <Header />

        <div className='app-body'>

            <div className="system-msg">mensagem de boas vindas(opcional)</div>

                    <div className='app-conteiner'>

                        <div className="hots-window">
                            
                            <div className="title-hots">
                                <h1>Hots/Promotions</h1>
                            </div>

                            <div className='products-hots'>

                                    <ProductHots />

                                    <ProductHots />

                                    <ProductHots />

                                    <ProductHots />

                            </div>

                        </div>

                    </div>
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
                                <div className='sc'>sideCategories6</div>
                                <div className='sc'>sideCategories7</div>
                                <div className='sc'>sideCategories8</div>
                            </div>

                        </div>

                    <div className="main-section">

                        <div className='sections'>

                            <ProductDefault />

                            <ProductDefault />

                            <ProductDefault />

                            <ProductDefault />

                            <ProductDefault />

                        </div>

                        <div className='sections'>
                            
                            <ProductDefault />

                            <ProductDefault />

                            <ProductDefault />

                            <ProductDefault />

                            <ProductDefault />

                        </div>
                    
                    </div>

            </div>

        <Footer />
    </div>
  )
}
