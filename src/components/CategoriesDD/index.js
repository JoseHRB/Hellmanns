import React from "react";
import './styles.css';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default () => {

    
    return (
        <nav className="dp-menu">
            <ul>
                <li><a href="#">CDD1</a>
                    <ul>
                        <li><a href="#">CDD1.1</a></li>
                        <li><a href="#">CDD1.2</a></li>
                        <li><a href="#">CDD1.3</a></li>
                        <li><a href="#">CDD1.4</a></li>
                        <li><a href="#">CDD1.5</a></li>
                    </ul>
                </li>
                <li><a href="#">CDD2</a>
                    <ul>
                        <li><a href="#">CDD2.1</a></li>
                        <li><a href="#">CDD2.2</a></li>
                        <li><a href="#">CDD2.3</a></li>
                        <li><a href="#">CDD2.4</a></li>
                        <li><a href="#">CDD2.5</a></li>
                    </ul>
                </li>
                <li><a href="#">CDD3</a>
                    <ul>
                        <li><a href="#">CDD3.1</a></li>
                        <li><a href="#">CDD3.2</a></li>
                        <li><a href="#">CDD3.3</a></li>
                        <li><a href="#">CDD3.4</a></li>
                        <li><a href="#">CDD3.5</a></li>
                    </ul>
                </li>
                <li><a href="#">CDD4</a>
                    <ul>
                        <li><a href="#">CDD4.1</a></li>
                        <li><a href="#">CDD4.2</a></li>
                        <li><a href="#">CDD4.3</a></li>
                        <li><a href="#">CDD4.4</a></li>
                        <li><a href="#">CDD4.5</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}