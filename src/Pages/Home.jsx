import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import RecentBills from '../Components/RecentBills';
import ExtraSections from '../Components/ExtraSections';
import Slider from '../Components/Slider/Slider';

const Home = () => {
    return (
        <div>
            {/* <Slider/> */}
            <Banner/>
            <Category/>
            <RecentBills/>
            <ExtraSections/>
        </div>
    );
};

export default Home;