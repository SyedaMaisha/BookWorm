import React from 'react';
import NavBar from '../../components/Header/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import '../../App.css';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='w-5/6 md:max-w-2xl lg:max-w-7xl mx-auto grow'>
                <NavBar></NavBar >
                <Outlet></Outlet>
            </div>
            <div className='mt-auto'>
                <Footer className='w-full m-0'></Footer>
            </div>
        </div>
    );
};

export default Root;