import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { id, title, fee, details, thumbnail } = useLoaderData()
    return (
        <div className='lg:py-24  lg:px-14 p-5'>
            <div className='flex items-center '>
                <img className='w-24 mr-3' src={thumbnail} />
                <div>
                    <span className='text-xl font-bold text-white'>{title}</span>
                    <div className='text-bold text-lg'>Fee: {fee}</div>
                </div>
            </div>
            <button className='px-10 py-2 bg-slate-600 rounded my-10 hover:bg-slate-400 text-bold text-white text-xl'>Payment Confirm</button>
        </div>
    );
};

export default Checkout;