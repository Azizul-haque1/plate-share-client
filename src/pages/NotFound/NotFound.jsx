import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { IoArrowBack } from 'react-icons/io5';
import { Navigate, useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="">
            <Navbar />
            {/* */}
            <div className="bg-[#F3F3F3] ">
                <div style={{ backgroundImage: 'url' }}
                    className={` w-10/12 mx-auto flex items-center justify-around h-screen`}>
                    <div className=" space-y-5">
                        <h2 className='text-5xl font-bold'>Ooops...</h2>
                        <h3 className='text-5xl text-gray-500'>Page not found</h3>
                        <button onClick={() => navigate('/')} className=' mt-10 btn btn-primary flex gap-2 items-center '> <IoArrowBack />
                            Go Back</button>
                    </div>
                    <img src="https://i.ibb.co.com/gbxjT3yy/404.png" alt="" />

                </div>
            </div>
        </div>
    );
};

export default NotFound;