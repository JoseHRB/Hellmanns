import React from "react";
import './index.css';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default () => {

    return (
        <div className='app-header'>

            <div className='logo'>
                Logo
            </div>

            <div className='cart'>
                <ShoppingCartOutlinedIcon 
                    style={{
                        width: '35px',
                        height: '35px'
                    }}/>
            </div>

        </div>
    );
}