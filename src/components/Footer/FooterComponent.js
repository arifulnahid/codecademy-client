import React from 'react';
import { FaCentercode, FaFacebookSquare, FaGooglePlusSquare, FaGithubSquare, FaYoutubeSquare } from 'react-icons/fa';

const FooterComponent = () => {
    return (
        <footer className='flex px-5 py-14 justify-between bg-slate-800 block'>
            <div className='flex'>
                <FaCentercode className='text-3xl text-white'></FaCentercode>
                <h1 className="lg:text-xl text-lg text-white font-bold px-5">	&copy; Codecademy 2022</h1>
            </div>
            <div className='flex'>
                <FaFacebookSquare className='text-3xl text-white mx-2' />
                <FaGooglePlusSquare className='text-3xl text-white mx-2' />
                <FaYoutubeSquare className='text-3xl text-white mx-2' />
                <FaGithubSquare className='text-3xl text-white mx-2' />
            </div>
        </footer>
    );
};

export default FooterComponent;