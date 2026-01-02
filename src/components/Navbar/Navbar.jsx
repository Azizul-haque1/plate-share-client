import React, { useEffect, useState } from 'react';
import { IoMdHome } from 'react-icons/io';
import { PiBowlFood } from 'react-icons/pi';
import { Link, NavLink } from 'react-router';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, signOutUser } = useAuth()

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);


    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    const links = <>
        <li>  <NavLink to='/'> <IoMdHome />
            Home</NavLink></li>

        <li>  <NavLink to='/available-foods'> <PiBowlFood />
            Available Foods</NavLink>
        </li>
    </>

    const handleLogout = () => {
        signOutUser()
            .then(res => {
                toast.success('logout', res)
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div>
            <div className=" bg-base-100 shadow-sm">
                <div className=" navbar  w-10/12 mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <Link to={'/'} className="w-1/5"> <img src="https://i.ibb.co.com/TBz8gmXL/transparent-Photoroom-1-1.png" alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="navbar-end z-50">
                        <input
                            onChange={(e) => handleTheme(e.target.checked)}
                            type="checkbox"
                            defaultChecked={localStorage.getItem('theme') === "dark"}
                            className="toggle mr-10" />

                        {user ? (<div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        referrerPolicy='no-referrer'
                                        src={user?.photoURL || "https://i.ibb.co.com/NgX6sdH9/images.png"} />

                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <Link to='/my-profile' className="justify-between">
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/add-food' className="justify-between">
                                        Add Food
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/manage-my-food' className="justify-between">
                                        Manage My Food
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/my-food-request' className="justify-between">
                                        My Food Request
                                    </Link>
                                </li>

                                <li onClick={handleLogout}><a>Logout</a></li>
                            </ul>
                        </div>) : (
                            <Link to='/auth/login' className='btn btn-secondary border-primary btn-outline text-primary rounded-xl'>Login</Link>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;