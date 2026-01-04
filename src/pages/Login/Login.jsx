import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Mail, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

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
                setLoading(false)
                setUser(res.user)
                toast.success('Login successful')

            })
            .catch(error => {
                console.log(error);
                showErrorToast(error.code);

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
                toast.error(error)
                console.log(error);
            })


    }

    const showErrorToast = (code) => {
        switch (code) {
            case "auth/invalid-email":
                toast.error("Invalid email address.");
                break;
            case "auth/user-disabled":
                toast.error("This account has been disabled.");
                break;
            case "auth/user-not-found":
                toast.error("No account found with this email.");
                break;
            case "auth/wrong-password":
                toast.error("Incorrect password.");
                break;
            case "auth/too-many-requests":
                toast.error("Too many failed attempts. Try again later.");
                break;
            case "auth/network-request-failed":
                toast.error("Network error. Check your connection.");
                break;
            case "auth/invalid-credential":
                toast.error("Invalid login credentials.");
                break;
            case "auth/operation-not-allowed":
                toast.error("Email/password login not enabled.");
                break;
            case "auth/internal-error":
                toast.error("Internal error. Try again later.");
                break;
            default:
                toast.error("Something went wrong. Please try again.");
        }

    };


    return (
        <div className='min-h-screen flex items-center justify-center py-20 px-4 bg-base-100'>
            <div className='w-full max-w-5xl bg-base-100 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-base-200'>

                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="md:w-1/2 bg-secondary p-12 text-white flex flex-col justify-between relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <Link to="/" className="text-2xl font-bold tracking-tighter mb-8 block">Plate Share.</Link>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Welcome Back!
                        </h2>
                        <p className="text-lg text-white/80 max-w-sm">
                            Sign in to continue sharing food and spreading hope in your community.
                        </p>
                    </div>

                    <div className="relative z-10 mt-12 md:mt-0">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-secondary bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs font-bold">
                                    <img src={`https://i.pravatar.cc/100?img=${10 + i}`} alt="user" className="w-full h-full rounded-full opacity-80" />
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-2 border-secondary bg-white text-secondary flex items-center justify-center text-xs font-bold z-10">
                                +2k
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-white/60">Join thousands of active donors today.</p>
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
                    className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
                >
                    <div className="w-full max-w-md mx-auto space-y-8">
                        <div>
                            <h1 className='text-3xl font-bold text-secondary mb-2'>Sign In</h1>
                            <p className='text-base-content/60'>Enter your details to access your account</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
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
                                        name='email'
                                        type="email"
                                        required
                                        className="input input-bordered w-full pl-10 focus:input-primary bg-base-200/50 transition-all border-transparent focus:border-primary focus:bg-base-100"
                                        placeholder="hello@example.com"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="form-control">
                                <div className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/40">
                                        <Lock size={20} />
                                    </div>
                                    <input
                                        name='password'
                                        required
                                        type={show ? 'text' : 'password'}
                                        className="input input-bordered w-full pl-10 pr-12 focus:input-primary bg-base-200/50 transition-all border-transparent focus:border-primary focus:bg-base-100"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShow(!show)}
                                        className='absolute inset-y-0 right-0 pr-3 flex items-center text-base-content/40 hover:text-primary transition-colors cursor-pointer'
                                    >
                                        {show ? <IoEye size={20} /> : <IoEyeOff size={20} />}
                                    </button>
                                </div>
                            </div>

                            <button className="btn btn-primary w-full text-white text-lg shadow-lg hover:shadow-primary/30 rounded-xl">
                                Sign In
                            </button>
                        </form>

                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-base-content/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-base-100 text-base-content/50">Or continue with</span>
                            </div>
                        </div>

                        <button
                            onClick={handelLoginWithGoogle}
                            className="btn btn-outline border-base-200 hover:border-base-300 hover:bg-base-50 text-base-content w-full gap-3 rounded-xl normal-case font-medium h-12"
                        >
                            <FaGoogle className="text-red-500 text-lg" />
                            Google
                        </button>

                        <p className='text-center text-base-content/60'>
                            Don’t have an account? <Link to='/auth/register' className='text-primary font-bold hover:underline'>Register Now</Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;