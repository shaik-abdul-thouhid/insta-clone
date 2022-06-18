import React from 'react'
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <React.Fragment>
            <div className='not-found-container'>
                <h1 className='not-found-shout not-found'>404 Not Found</h1>
                <Link className='not-found-shout not-found-link' to='/'><h3>Click here to go to homepage</h3></Link>
            </div>
        </React.Fragment>
    );
}

export default NotFoundPage;