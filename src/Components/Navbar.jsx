import React, { useContext } from 'react';
import { AuthContext } from './../Context/AuthContext';
import { Link, NavLink } from 'react-router';
import toast from 'react-hot-toast';
import { BiLogOut } from 'react-icons/bi';

const Navbar = () => {

    const { user, setUser, togl, setTogl, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        console.log("logout clicked");
        logOut()
            .then(res => {
                setUser(null);
                toast.success("log out successfull", res);
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message);
            });
    };

    return (
        // CHANGED: wrap navbar in a sticky header container
        <header className="sticky top-0 z-50">
            <div className="navbar glass bg-base-100/40 backdrop-blur-lg border-b border-base-content/10 shadow-sm lg:px-[5vw]">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content glass bg-base-100/60 backdrop-blur-lg rounded-box z-50 mt-3 w-52 p-2 shadow"
                        >
                            <NavLink className={"py-3 px-6 bg-gray-400 mt-2 rounded-lg flex items-center justify-center"} to={"/"}>Home</NavLink>
                            <NavLink className={"py-3 px-6 bg-gray-400 mt-2 rounded-lg flex items-center justify-center"} to={"bills/all-bills"}>All Bills</NavLink>
                            <NavLink className={"py-3 px-6 bg-gray-400 mt-2 rounded-lg flex items-center justify-center"} to={"/"}>Home</NavLink>
                            <NavLink className={"py-3 px-6 bg-gray-400 mt-2 rounded-lg flex items-center justify-center"} to={"bills/all-bills"}>All Bills</NavLink>
                            <NavLink className={"py-3 px-6 bg-gray-400 mt-2 rounded-lg flex items-center justify-center"} to={"/about"}>About</NavLink>
                            <NavLink className={"py-3 px-6 bg-gray-400 mt-2 rounded-lg flex items-center justify-center"} to={"contact"}>Contact</NavLink>
                            <NavLink className={"py-3 px-6 bg-gray-400 mt-2 rounded-lg flex items-center justify-center"} to={"blog"}>Blog</NavLink>
                            <NavLink className={"py-3 px-6 bg-gray-400 mt-2 rounded-lg flex items-center justify-center"} to={"dashboard"}>My Profile</NavLink>
                            <NavLink className={"py-3 px-6 bg-gray-400 mt-2 rounded-lg flex items-center justify-center"} onClick={handleLogout}><BiLogOut className='text-black mr-5'/> Logout</NavLink>
                        </ul>
                    </div>

                    <Link to={"/"} className=" text-xl lg:text-2xl font-extrabold">Verdian Bills</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 items-center">
                        <NavLink className={"mr-1 font-semibold hover:bg-secondary p-3 hover:rounded-lg"} to={"/"}>Home</NavLink>
                        <NavLink className={"mr-1 font-semibold hover:bg-secondary p-3 hover:rounded-lg"} to={"bills/all-bills"}>All Bills</NavLink>
                        <NavLink className={"mr-1 font-semibold hover:bg-secondary p-3 hover:rounded-lg"} to={"/about"}>About</NavLink>
                        <NavLink className={"mr-1 font-semibold hover:bg-secondary p-3 hover:rounded-lg"} to={"contact"}>Contact</NavLink>
                        <NavLink className={"mr-1 font-semibold hover:bg-secondary p-3 hover:rounded-lg"} to={"blog"}>Blog</NavLink>
                        <NavLink className={"mr-1 font-semibold hover:bg-secondary p-3 hover:rounded-lg"} to={"faq"}>FAQ</NavLink>
                    </ul>
                </div>

                <div className="navbar-end">
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="user profile picture" src={user.photoURL} />
                                </div>
                            </div>

                            {/* CHANGED: avatar dropdown glass */}
                            <ul tabIndex="-1"
                                className="menu menu-sm max-sm:hidden dropdown-content glass bg-base-100/60 backdrop-blur-lg rounded-box z-50 mt-3 w-52 p-2 shadow">
                                <li className='flex justify-center items-center py-1' ><NavLink className={"w-full py-2 flex items-center justify-center font-semibold text-md" } to="dashboard/my-profile">My Profile</NavLink></li>
                                <li className='flex justify-center items-center py-1' > <NavLink className={"w-full py-2  flex items-center justify-center font-semibold text-md"} to="/Dashboard">Dashboard</NavLink> </li>
                                <li className='flex justify-center items-center py-1'  onClick={handleLogout}> <NavLink className={"w-full py-2  flex items-center justify-center font-semibold text-md"} to="/Dashboard">Logout</NavLink> </li>
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <Link to={"/auth/login"}>
                                <button onClick={() => setTogl(true)} className={`btn btn-primary ${togl ? "bg-white text-black" : ""}`}>
                                    Login
                                </button>
                            </Link>

                            <Link to={"/auth/signup"}>
                                <button onClick={() => setTogl(false)} className={`btn btn-primary ${togl ? "" : "bg-white text-black"}`}>
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    )}
                </div>

            </div>
        </header>
    );
};

export default Navbar;
