import React from 'react';
import { Link } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Error404page = () => {
    return (
        <div>
            <Navbar/>
            <div className='flex flex-col justify-center items-center py-18 bg-base-100 '>
                <img src="https://i.pinimg.com/736x/9d/88/5a/9d885acff47719d24095f082df136794.jpg" alt="" />
                <h1 className='text-6xl font-bold mb-5'>Oops, Apps not found!</h1>
                <p className='text-gray-500 text-lg'>The Page you are looking for is not available.</p>
                <Link to='/'><button className='btn mt-6 w-[180px] bg-[linear-gradient from-primary via-indigo-900 to-secondary]'>Go Back</button></Link>
            </div>
            <Footer/>
        </div>
    );
};

export default Error404page;