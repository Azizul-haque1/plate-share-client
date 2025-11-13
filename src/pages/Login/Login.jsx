import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { FaEye, FaGoogle } from 'react-icons/fa';
import { IoEye, IoEyeOff } from "react-icons/io5";


const Login = () => {
    const [show, setShow] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const { sigInWithGoolge, setUser, user, setLoading,
        signWithEmailAndPasswordFunc
    } = useAuth()


    useEffect(() => {
        if (user) {
            navigate(location.state ? location.state : '/')

        }
    }, [user, navigate, location])



    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;

        const passwordUpperRegex = /[A-Z]/
        const passwordLowerRegex = /[a-z]/

        if (password.length < 6) {
            return toast.error('Password must be at least 6 characters long')
        }
        else if (!passwordUpperRegex.test(password)) {
            return toast.error(' Password must contain at least one uppercase letter.')
        }
        else if (!passwordLowerRegex.test(password)) {
            return toast.error(' Password must contain at least one lowercase letter.')
        }

        signWithEmailAndPasswordFunc(email, password)
            .then(res => {
                setUser(res.user)
                toast.success('Login successful')

            })
            .catch(error => {
                console.log(error);
            })


    }
    const handelLoginWithGoogle = () => {

        sigInWithGoolge()
            .then(res => {
                setLoading(false)
                console.log(res.user);
                setUser(res.user)
                toast.success('Login successful')
                navigate(location.state ? location.state : '/')


            })
            .catch((error) => {
                setLoading(false)
                console.log(error);
            })


    }


    return (
        <div className=' px-2 md:px-0 md:w-10/12 mx-auto flex flex-col items-center md:flex-row gap-20 justify-center pt-20 pb-40 md:py-20 '>
            <div 
            
            className="md:w-1/4 hidden md:flex ">
                <img className='' src="https://i.ibb.co.com/vxLJJKZ6/Illustration.png" alt="" />

            </div>            {/* <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"> */}
            <div className=" shadow-xl   w-full  md:w-1/2 lg:w-1/3 border border-secondary/40  md:p-10 p-2 rounded-xl md:border-gray-300 ">
                <h1 className='text-center text-xl my-10 text-gray-500'>Welcome back! Sign in to continue</h1>

                <form onSubmit={handleLogin} className="fieldset gap-4">
                    {/* email */}
                    <div className="" >

                        <label className="">Email</label>
                        <input
                            name='email'
                            type="email"
                            className="input w-full mt-2 bg-gray-100 placeholder:text-gray-300   border-0 focus:outline-primary "
                            placeholder="Email" />
                    </div>

                    <div className=" relative">
                        <div className="flex justify-between">
                            <label className="">Password</label>
                            <Link className='text-primary font-semibold'>Forgot password?</Link>
                        </div>
                        <input

                            name='password'
                            type={`${show ? 'text' : 'Password'}`}
                            className="input w-full mt-2 bg-gray-100 placeholder:text-gray-300    border-0 focus:outline-primary "
                            placeholder="Password" />
                        <span onClick={() => setShow(!show)} className=' absolute  bottom-4 x z-10 right-2'>{show ? <IoEye /> : <IoEyeOff />
                        }

                        </span>
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
                <p className='text-sm my-4 text-center text-gray-500'>Don’t have an account yet? <Link to='/auth/register' className='text-primary font-semibold'>Register</Link> </p>

                {/* </div> */}
            </div >
        </div >
    );
};

export default Login;