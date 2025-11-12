import React, { useContext } from 'react';
import { AuthContext } from './../Context/AuthContext';
import { Link, NavLink } from 'react-router';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, setUser,togl,setTogl,logOut } = useContext(AuthContext)
    const handleLogout = () => {
        console.log("logout clicked");
        logOut()
            .then(res => {
                console.log(res);
                setUser(null)
               toast.success("log out successfull")
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
            });
    }
    return (

        <div className="navbar bg-primary text-white shadow-sm lg:px-[5vw]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-primary text-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink>Home</NavLink>
                        <NavLink>All Bills</NavLink>
                        <NavLink>My Profile</NavLink>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Bills</a></li>
                                <li><a>Add Bill</a></li>
                            </ul>
                            <NavLink onClick={handleLogout}>Logout</NavLink>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Veridian Bills</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>All Bills</a></li>
                    <li><a>My profile</a></li>
                    <li>
                        <details>
                            <summary>Bills</summary>
                            <ul className="p-2 w-[150px]">
                                <li><a>Add Bill</a></li>
                                <li><a>My Bills</a></li>
                            </ul>
                        </details>
                    </li>

                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="user profile picture"
                                    src={user.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm max-sm:hidden dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow text-white bg-primary">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                    </div> : <div>
                        <Link to={"/auth/login"}>
                        <button onClick={()=>setTogl(true)} className={`btn btn-primary ${togl?"bg-white text-black":""}` }>Login</button>
                        </Link>
                        <Link to={"/auth/signup"}>
                        <button onClick={()=>setTogl(false)} className={`btn btn-primary ${togl?"":"bg-white text-black"}` }>Sign Up</button>
                        </Link>
                    </div>
                }


            </div>
        </div>

    );
};

export default Navbar;