import React from 'react';
import Banner from '../../Shared/Banner';
import AboutBuilding from '../../Shared/AboutBuilding';
import Coupons from '../../Shared/Coupons';
import OurLocation from '../../Shared/OurLocation';

const Home = () => {
    return (
        <div className='-z-10'>
            <Banner></Banner>
            <div className="container mx-auto px-2 mb-10">
                <AboutBuilding></AboutBuilding>
                <Coupons></Coupons>
                <OurLocation></OurLocation>
            </div>
        </div>
    );
};

export default Home;