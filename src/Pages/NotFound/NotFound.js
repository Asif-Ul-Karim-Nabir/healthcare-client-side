import React from 'react';
import notFound from '../../images/notFound/404-not-found.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notFound">
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;