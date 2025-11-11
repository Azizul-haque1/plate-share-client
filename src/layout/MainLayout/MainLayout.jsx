import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <Navbar />
            </header>
            <main className=' flex-grow'>
                <Outlet />
                <Toaster />
            </main>

            <footer className=' w-full  bottom-0'>
                <Footer />
            </footer>

        </div>
    );
};

export default MainLayout;