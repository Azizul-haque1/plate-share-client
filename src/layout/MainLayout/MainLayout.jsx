import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <Outlet />
            <Toaster />

        </div>
    );
};

export default MainLayout;