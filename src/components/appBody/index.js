import React from "react";
import './style.css';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default () => {

    
    return (

        <div className='side-categories'>

            <div className="sc-header">
                <div className="sc-icon">
                    <FormatListBulletedIcon
                        style={{
                            width: '40px',
                            Height: '40px'
                        }}/>
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

    );
}