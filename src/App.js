import React from 'react';
import './App.css';

import Header from './components/header/index.js';
import Footer from './components/footer/index.js';
import CategoriesDD from './components/CategoriesDD';
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

                    <CategoriesDD />

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
