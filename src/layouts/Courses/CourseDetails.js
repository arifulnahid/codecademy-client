import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const { id, title, fee, details, thumbnail } = useLoaderData()
    // console.log(id);
    return (
        <div className='grid lg:grid-cols-2 py-24 gap-14 px-5'>
            <div>
                <img className='w-full' src={thumbnail} />
                <h1 className='text-white text-2xl font-bold'>{title}</h1>
                <h1 className='text-white text-2xl font-bold'>{fee}</h1>
            </div>
            <div>
                {details}
                <div className='w-full my-10'>
                    <Link to={`/checkout/${id}`} className='bg-slate-500 rounded px-24 py-5 w-full text-2xl font-bold text-white'>Enroll</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;