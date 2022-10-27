import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center'>
            <div>
                <h1 className='text-white text-5xl font-extrabold'>404</h1>
                <h1 className='text-xl font-bold mb-5'>Page Not Found</h1>
                <Link className='px-14 py-3 bg-slate-800 text-xl font-bold' to="/">Back Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;