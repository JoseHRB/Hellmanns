import React from "react";
import './index.css';

export default () => {
    return (
        <div className='app-body'>

            <div className="system-msg">mensagem de boas vindas</div>

            <div className='app-conteiner'>

                <div className='side-categories'>

                    <div className='sc'>sideCategories1</div>
                    <div className='sc'>sideCategories2</div>
                    <div className='sc'>sideCategories3</div>
                    <div className='sc'>sideCategories4</div>
                    <div className='sc'>sideCategories5</div>

                </div>

                <div className='app-hots'>
                    promo/hots
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