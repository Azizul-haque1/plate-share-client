import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { User, Image as ImageIcon, Mail, Lock, CheckCircle } from 'lucide-react';

const Register = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { user } = useAuth()
    const { sigInWithGoolge, setUser, setLoading, createUserWithEmailAndPasswordFunc, updateUser } = useAuth()

    useEffect(() => {
        if (user) {
            navigate(location.state ? location.state : '/')
        }
    }, [user, navigate, location])

    const handelLoginWithGoogle = () => {
        sigInWithGoolge()
            .then(res => {
                setLoading(false)
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
                updateUser(name, photoURL)
                    .then(res => {
                        setUser(user) // Use the user object from creation
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='min-h-screen flex items-center justify-center py-20 px-4 bg-base-100'>
            <div className='w-full max-w-6xl bg-base-100 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-base-200'>

                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="md:w-5/12 bg-primary p-12 text-white flex flex-col justify-between relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <Link to="/" className="text-2xl font-bold tracking-tighter mb-8 block">Plate Share.</Link>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Join the Movement.
                        </h2>
                        <p className="text-lg text-white/80 max-w-sm">
                            Create an account to start sharing food, reducing waste, and building a stronger community.
                        </p>
                    </div>

                    <div className="relative z-10 mt-12 md:mt-0 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold">Be a Donor</h4>
                                <p className="text-sm text-white/70">Share surplus food easily.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold">Make an Impact</h4>
                                <p className="text-sm text-white/70">Help people in need near you.</p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
                </motion.div>

                {/* Form Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
                >
                    <div className="w-full max-w-md mx-auto space-y-8">
                        <div>
                            <h1 className='text-3xl font-bold text-secondary mb-2'>Create Account</h1>
                            <p className='text-base-content/60'>Fill in your details to get started</p>
                        </div>

                        <form onSubmit={handleRegister} className="space-y-5">
                            {/* Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Full Name</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/40">
                                        <User size={20} />
                                    </div>
                                    <input
                                        required
                                        type="text"
                                        name='name'
                                        className="input input-bordered w-full pl-10 focus:input-primary bg-base-200/50"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            {/* Photo URL */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo URL</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/40">
                                        <ImageIcon size={20} />
                                    </div>
                                    <input
                                        required
                                        type='url'
                                        name='photo'
                                        className="input input-bordered w-full pl-10 focus:input-primary bg-base-200/50"
                                        placeholder="https://example.com/photo.jpg"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email Address</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/40">
                                        <Mail size={20} />
                                    </div>
                                    <input
                                        required
                                        name='email'
                                        type="email"
                                        className="input input-bordered w-full pl-10 focus:input-primary bg-base-200/50"
                                        placeholder="hello@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                {/* Password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Password</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/40">
                                            <Lock size={20} />
                                        </div>
                                        <input
                                            required
                                            name='password'
                                            type="password"
                                            className="input input-bordered w-full pl-10 focus:input-primary bg-base-200/50"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Confirm Password</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/40">
                                            <CheckCircle size={20} />
                                        </div>
                                        <input
                                            required
                                            name='confirm_password'
                                            type="password"
                                            className="input input-bordered w-full pl-10 focus:input-primary bg-base-200/50"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button className="btn btn-primary w-full text-white text-lg shadow-lg hover:shadow-primary/30 rounded-xl mt-4">
                                Create Account
                            </button>
                        </form>

                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-base-content/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-base-100 text-base-content/50">Or register with</span>
                            </div>
                        </div>

                        <button onClick={handelLoginWithGoogle} className="btn btn-outline border-base-200 hover:border-base-300 hover:bg-base-50 text-base-content w-full gap-3 rounded-xl normal-case font-medium">
                            <FaGoogle className="text-red-500 text-lg" />
                            Google
                        </button>

                        <p className='text-center text-base-content/60'>
                            Already have an account? <Link to='/auth/login' className='text-primary font-bold hover:underline'>Login here</Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Register;