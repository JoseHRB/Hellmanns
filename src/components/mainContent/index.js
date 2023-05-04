import React from "react";
import './index.css';

export default () => {
    return (
      <div className='app-body'>
        
          <div className='app-conteiner'>

            <div className='side-categories'>

              <div className='sc'>sc1</div>
              <div className='sc'>sc2</div>
              <div className='sc'>sc3</div>
              <div className='sc'>sc4</div>

            </div>

            <div className='app-promotions'>
              promo
            </div>

          </div>

          <div className='app-contents'>
            <div className="content">1</div>
            <div className="content">2</div>
            <div className="content">3</div>
            <div className="content">4</div>
          </div>

      </div>
    );
}