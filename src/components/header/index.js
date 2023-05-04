import React from "react";
import './index.css';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default () => {

    return (
        <div className='app-header'>
            <div className="conteiner">
                <div className='logo'>
                    <img 
                        className="imglogo"
                        src="https://cdn-icons-png.flaticon.com/512/3209/3209945.png"
                        width={'75px'}
                        height={'75px'}
                    />
                </div>

                <div className='cartAndLogin'>
                    <div className="cart">
                        <ShoppingCartOutlinedIcon 
                            style={{
                                width: '50px',
                                height: '50px'
                            }}
                        />
                    </div>
                    <div className="login">
                        <AccountCircleIcon
                            style={{
                                width: '50px',
                                height: '50px'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}