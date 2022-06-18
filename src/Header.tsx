import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <React.Fragment>
            <div className='header-container header-position'>
                <Link to='/'>
                    <img className="image" src={process.env.PUBLIC_URL + 'logo.png'} alt="Insta-clone" />
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Header