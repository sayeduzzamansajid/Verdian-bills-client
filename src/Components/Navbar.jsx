import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../Context/AuthContext';
import { Link, NavLink } from 'react-router';
import toast from 'react-hot-toast';

const Navbar = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const { user, setUser, togl, setTogl, logOut } = useContext(AuthContext)
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme])
    const handleToggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }
    // console.log(theme);
    const handleLogout = () => {
        console.log("logout clicked");
        logOut()
            .then(res => {
                // console.log(res);
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
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"bills/all-bills"}>All Bills</NavLink>
                        <NavLink to={"my-profile"}>
                            <li>
                                <a className="justify-between">
                                    My Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                        </NavLink>
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
                <ul className="menu menu-horizontal px-1 gap-4 items-center">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"bills/all-bills"}>All Bills</NavLink>
                    <li>
                        <details>
                            <summary>Bills</summary>
                            <ul className="p-2 w-[150px] bg-primary  text-white flex flex-col gap-2 z-10">
                                <NavLink to={"bills/add-bills"} className={"hover:bg-white hover:text-black py-2 px-5 rounded-lg"}>Add Bills</NavLink>
                                <NavLink to={"bills/my-bills"} className={"hover:bg-white hover:text-black py-2 px-5 rounded-lg"}>My Bills</NavLink>
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
                            <li className='flex justify-center items-center'><label className="flex cursor-pointer gap-2">
                                <span className="label-text">Dark</span>
                                <input onChange={handleToggleTheme} type="checkbox" value="synthwave" className="toggle theme-controller" />
                                <span className="label-text">Light</span>
                            </label></li>
                            {/* <ToggleButton theme={theme} toggleTheme={toggleTheme} /> */}
                            {/* <input
                                type="checkbox"
                                value="dark"
                                className="toggle theme-controller mr-6 text-white"
                                checked={theme === "dark"}
                                onChange={(e) => toggleTheme(e.target.checked)}
                            /> */}
                            <li>
                                <NavLink to="/my-profile">My Profile</NavLink>
                            </li>


                            <li onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                    </div> : <div>
                        <Link to={"/auth/login"}>
                            <button onClick={() => setTogl(true)} className={`btn btn-primary ${togl ? "bg-white text-black" : ""}`}>Login</button>
                        </Link>
                        <Link to={"/auth/signup"}>
                            <button onClick={() => setTogl(false)} className={`btn btn-primary ${togl ? "" : "bg-white text-black"}`}>Sign Up</button>
                        </Link>
                    </div>
                }


            </div>
        </div>

    );
};

export default Navbar;