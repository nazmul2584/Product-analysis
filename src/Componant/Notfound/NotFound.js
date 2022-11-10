import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>page not found</h1>
            <Link to="/">
            <button className='bg-rose-400 px-24 py-3 text-white rounded'>go to home</button>
            </Link>
        </div>
    );
};

export default NotFound;