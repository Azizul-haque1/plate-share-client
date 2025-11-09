import React from 'react';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import { FaGoogle } from "react-icons/fa";

import { Link } from 'react-router';

const Register = () => {
    const { sigInWithGoolge, setUser, setLoading } = useAuth()
    const handelLoginWithGoogle = () => {

        sigInWithGoolge()
            .then(res => {
                setLoading(false)
                console.log(res.user);
                setUser(res.user)
                toast.success('Login successful')

            })
            .catch((error) => {
                setLoading(false)
                console.log(error);
            })


    }
    return (
        <div className=' px-2 md:px-0 md:w-10/12 mx-auto flex flex-col items-center md:flex-row gap-20 justify-center md:h-screen '>
            {/* <img className='md:w-1/3 hidden md:flex ' src="https://i.ibb.co.com/BKNkW4Ct/undraw-secure-login-m11a-4.png" alt="" /> */}

            <div className=" w-full  md:w-1/3 border border-transparent  md:p-10 p-2 rounded-xl md:border-gray-300 ">
                <h1 className='text-center text-2xl my-10 text-gray-500'>Create an account
                </h1>

                <form className="fieldset gap-4">
                    {/* Name */}
                    <div className="" >

                        <label className="">Name</label>
                        <input
                            required
                            type="text"
                            name='name'
                            className="input w-full mt-2 bg-gray-100 placeholder:text-gray-300   border-0 focus:outline-primary "
                            placeholder="Name" />
                    </div>
                    {/* Photo url */}
                    <div className="" >

                        <label className="">Photo Url</label>
                        <input
                            required
                            type='url'
                            name='photo'
                            className="input w-full mt-2 bg-gray-100 placeholder:text-gray-300   border-0 focus:outline-primary "
                            placeholder="Photo url here" />
                    </div>
                    {/* email */}
                    <div className="" >

                        <label className="">Email</label>
                        <input
                            required
                            type="email"
                            className="input w-full mt-2 bg-gray-100 placeholder:text-gray-300   border-0 focus:outline-primary "
                            placeholder="Email" />
                    </div>
                    {/* Password */}
                    <div className="">
                        <div className="flex justify-between">
                            <label className="">Password</label>


                        </div>
                        <input
                            required
                            type="password"
                            className="input w-full mt-2 bg-gray-100 placeholder:text-gray-300    border-0 focus:outline-primary "
                            placeholder="Password" />
                    </div>
                    {/* Confirm password
 */}
                    <div className="">
                        <div className="flex justify-between">
                            <label className="">Confirm password
                            </label>


                        </div>
                        <input
                            required
                            type="password"
                            className="input w-full mt-2 bg-gray-100 placeholder:text-gray-300    border-0 focus:outline-primary "
                            placeholder="Confirm password
" />
                    </div>
                    <button className="btn btn-primary mt-4">Login</button>
                </form>
                <div className="divider text-sm text-gray-500">Or continue with
                </div>
                {/* Google */}
                <button onClick={handelLoginWithGoogle} className="btn bg-white text-primary  w-full   border-primary">
                    <FaGoogle />

                    Login with Google
                </button>
                <p className='text-sm my-4 text-center text-gray-500'>Already have an account? <Link to='/auth/login' className='text-primary font-semibold'>Login here</Link> </p>


            </div >
        </div >
    );
};

export default Register;