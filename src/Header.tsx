import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <React.Fragment>
            <div className='header-container header-position'>
                <img className="image" src={ process.env.PUBLIC_URL + 'logo.png' } alt="Insta-clone" />
            </div>
        </React.Fragment>
    )
}

export default Header