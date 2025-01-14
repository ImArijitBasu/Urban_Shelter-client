import React from 'react';
import Banner from '../../Shared/Banner';
import AboutBuilding from '../../Shared/AboutBuilding';

const Home = () => {
    return (
        <div className='-z-10'>
            <Banner></Banner>
            <div className="container mx-auto">
                <AboutBuilding></AboutBuilding>
            </div>
        </div>
    );
};

export default Home;