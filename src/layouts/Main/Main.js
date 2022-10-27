import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterComponent from '../../Components/Footer/FooterComponent';
import Header from '../../Components/Header/Header';
import SidebarNav from '../../Components/Sidebar/SidebarNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex '>
                <div>
                    <SidebarNav></SidebarNav>
                </div>
                <div className='grow '>
                    <Outlet></Outlet>
                </div>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    );
};

export default Main;