import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import RecentBills from '../Components/RecentBills';
import UserTestimonials from '../Components/UserTestimonials';
import LatestNews from '../Components/LatestNews';
import ExtraSections from '../Components/ExtraSections';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <RecentBills/>
            <ExtraSections/>
        </div>
    );
};

export default Home;