import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col w-full min-h-screen'>
            <header className=' top-0 sticky z-50'>
                <Navbar />
            </header>
            <main className='flex-grow '>
                <Outlet />
                <Toaster />
            </main>

            <footer className='w-full '>
                <Footer />
            </footer>

        </div>
    );
};

export default MainLayout;