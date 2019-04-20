import React, { useEffect } from 'react';
import header from '../images/header_small.jpg';

const Logo = () => {

    let size = "537px";
    useEffect(() => {
        size = window.innerWidth + "px";
        }
    );

    return (
        <div className="App-header">
            <div>
                <img className="Logo" width={size} src={header} alt="kolakucoa logo" />
            </div>
        </div>
    )
}

export default Logo;