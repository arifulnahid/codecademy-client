import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBlogger, FaQuestionCircle, FaLaptop } from 'react-icons/fa';

const SidebarNav = () => {
    return (
        <div className="w-fit lg:ml-5 hidden lg:block">
            <Link to="/" className='flex items-center my-2 hover:bg-slate-500 rounded py-1 pl-2 pr-24'>
                <FaHome className='inline text-2xl text-white text-center'></FaHome>
                <h1 className='mx-3 inline text-xl text-white text-center font-bold' to="/">Home</h1>
            </Link>
            <Link to="/blog" className='flex items-center my-2 hover:bg-slate-500 rounded py-1 pl-2 pr-24'>
                <FaBlogger className='inline text-2xl text-white text-center'></FaBlogger>
                <h1 className='mx-3 inline text-xl text-white text-center font-bold' to="/blog">Blog</h1>
            </Link>
            <Link to="/courses" className='flex items-center my-2 hover:bg-slate-500 rounded py-1 pl-2 pr-24'>
                <FaLaptop className='inline text-2xl text-white text-center'></FaLaptop>
                <h1 className='mx-3 inline text-xl text-white text-center font-bold' to="/courses">Courses</h1>
            </Link>
            <Link to="/faq" className='flex items-center my-2 hover:bg-slate-500 rounded py-1 pl-2 pr-24'>
                <FaQuestionCircle className='inline text-2xl text-white text-center'></FaQuestionCircle>
                <h1 className='mx-3 inline text-xl text-white text-center font-bold' to="/faq">FAQ</h1>
            </Link>
        </div>
    );
};

export default SidebarNav;