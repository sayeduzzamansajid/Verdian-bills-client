import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import RecentBills from '../Components/RecentBills';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <RecentBills/>
        </div>
    );
};

export default Home;