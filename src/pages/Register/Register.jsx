import React, { use, useEffect } from 'react';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import { FaGoogle } from "react-icons/fa";

import { Link, useLocation, useNavigate } from 'react-router';

const Register = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const { user } = useAuth()

    const { sigInWithGoolge,
        setUser,
        setLoading,
        createUserWithEmailAndPasswordFunc,
        updateUser,
    } = useAuth()


    useEffect(() => {
        if (user) {
            navigate(location.state ? location.state : '/')

        }
    }, [user, navigate, location])

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
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;
        // console.log({ name, photoURL, email, password, ConfirmPassword });
        // console.log({ password, confirmPassword });
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
        else if (password !== confirmPassword) {
            return toast.error('Password do not match')
        }

        createUserWithEmailAndPasswordFunc(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                updateUser(name, photoURL)
                    .then(res => {
                        console.log(res.user);
                        setUser(res.user)
                    })
                    .catch(err => {
                        console.log(err);
                    })
                // console.log(res);
            })
            .catch(error => {
                console.log(error);
            })


    }
    return (
        <div className=' px-2  md:px-0 md:w-10/12 mx-auto flex flex-col items-center md:flex-row gap-20 justify-center md:h-screen '>
            {/* <img className='md:w-1/3 hidden md:flex ' src="https://i.ibb.co.com/BKNkW4Ct/undraw-secure-login-m11a-4.png" alt="" /> */}

            <div className=" w-full shadow-2xl  md:w-1/3 border border-transparent  md:p-10 p-2 rounded-xl md:border-gray-300 ">
                <h1 className='text-center text-2xl my-10 text-gray-500'>Create an account
                </h1>

                <form onSubmit={handleRegister} className="fieldset gap-4">
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
                            name='email'
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
                            name='password'
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
                            name='confirm_password'
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