import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../../ContextAPI/AuthContext';
import Courses from '../Courses/Courses';

const Home = () => {
    const data = useLoaderData()

    return (
        <>
            <div className='flex flex-wrap items-center py-10 justify-center bg-indigo-50'>
                <div className='lg:mx-5'>
                    <h1 className='lg:text-5xl text-3xl text-black font-bold my-2 text-center'>Learn in you own way</h1>
                    <h1 className='lg:text-5xl text-3xl text-black font-bold my-2 text-center'>build confidence!</h1>
                </div>
                <div>
                    <img className='lg:w-72 w-full rounded' src='https://img.freepik.com/premium-vector/programming-code-icon-made-with-binary-code-coding-hacker-matrix-background-with-digits-1-0_127544-1141.jpg' />
                </div>
            </div>

            <div>
                <h1 className='text-3xl text-black pl-10 py-2 font-bold bg-indigo-50'>Populer Courses</h1>
                <Courses data={data}></Courses>
            </div>
        </>
    );
};

export default Home;