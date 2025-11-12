import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router'; // Assuming you use react-router-dom for navigation
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {
    const { setUser, setTogl, signIn, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(res => {
                toast.success("Login Successfull")
                setUser(res)
                navigate('/')
            })
            .catch(err => toast.error(err.message))
    };
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                toast.success("Logged in")
                setUser(res)
                navigate('/')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center  p-4">
            <div className="flex w-full max-w-5xl rounded-lg shadow-lg overflow-hidden bg-white">
                {/* Left Side: Image (Hidden on small screens) */}
                <div className="hidden md:flex md:w-1/2 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://i.pinimg.com/736x/1f/45/e7/1f45e79ccfca5bcf5fa7dfc969f7f389.jpg')" }}>
                    {/* You can optionally add an overlay or content here */}
                </div>

                {/* Right Side: Login Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">Welcome back</h2>
                    <p className="text-gray-600 mb-8">Please enter your details.</p>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-1">
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your e-mail"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                                           focus:ring-primary focus:border-primary sm:text-base outline-none"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="********"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                                           focus:ring-primary focus:border-primary sm:text-base outline-none"
                                required
                            />
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <Link to="/forgot-password" className="font-medium text-primary hover:text-primary-dark">
                                Forgot your password?
                            </Link>
                        </div>

                        {/* Login Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md
                                           shadow-sm text-lg font-medium text-white bg-gray-800
                                           hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2
                                           focus:ring-gray-700 transition duration-150 ease-in-out"
                            >
                                Log in
                            </button>
                        </div>
                    </form>

                    <div className='w-[80%] h-px bg-gray-400 mt-5 mx-auto relative'> <span className='absolute right-45 -top-4 bg-white px-3'>or</span></div>

                    <div>
                        {/* Google */}
                        <button onClick={handleGoogleSignIn} className="btn w-full mt-6 bg-white text-black border-[#e5e5e5] hover:bg-base-200">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>

                    {/* Register Link */}
                    <p className="mt-8 text-center text-base text-gray-600">
                        Don't have an account?{' '}
                        <Link onClick={() => setTogl(false)} to="/auth/signup" className="font-medium text-primary hover:text-primary-dark">
                            SignUp here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;