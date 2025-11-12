import React from 'react';
import { PulseLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className='flex items-center justify-center h-screen'>

            <PulseLoader color='#f44c26' />


        </div>
    );
};

export default Loader;