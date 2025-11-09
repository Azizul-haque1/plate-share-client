import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className=' w-10/12 mx-auto flex items-center gap-20 justify-center h-screen border'>
            <img className='w-1/3 ' src="https://i.ibb.co.com/BKNkW4Ct/undraw-secure-login-m11a-4.png" alt="" />
            {/* <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"> */}
            <div className="w-1/4 border  p-10 rounded-xl border-gray-300 ">
                <h1 className='text-center text-xl my-10 text-gray-500'>Welcome back! Sign in to continue</h1>

                <fieldset className="fieldset gap-4">
                    {/* email */}
                    <div className="" >

                        <label className="">Email</label>
                        <input
                            type="email"
                            className="input w-full mt-2 bg-gray-100   border-0 focus:outline-primary "
                            placeholder="Email" />
                    </div>

                    <div className="">
                        <div className="flex justify-between">
                            <label className="">Password</label>

                            <Link className='text-primary font-semibold'>Forgot password?</Link>
                        </div>
                        <input
                            type="password"
                            className="input w-full mt-2 bg-gray-100   border-0 focus:outline-primary "
                            placeholder="Password" />
                    </div>
                    <button className="btn btn-primary mt-4">Login</button>
                </fieldset>
                <div className="divider text-sm text-gray-500">Or continue with
                </div>
                {/* Google */}
                <button className="btn bg-white text-black w-full border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
                <p className='text-sm my-4 text-center text-gray-500'>Don’t have an account yet? <Link to='/register' className='text-primary font-semibold'>Sign up</Link> </p>

                {/* </div> */}
            </div >
        </div >
    );
};

export default Login;