import React from 'react';
import Banner from '../../Shared/Banner';
import AboutBuilding from '../../Shared/AboutBuilding';
import Coupons from '../../Shared/Coupons';
import OurLocation from '../../Shared/OurLocation';
import AvailableApartments from '../../Shared/AvailableApartments';
import SecurityFeatures from '../../Shared/SecurityFeatures';
import Testimonials from '../../Shared/Testimonials';
import ApartmentSlider from '../../Shared/ApartmentSlider';

const Home = () => {
    return (
        <div className='-z-10'>
            <Banner></Banner>
            <div className="container mx-auto px-2 mb-10">
                <AboutBuilding></AboutBuilding>
                <AvailableApartments></AvailableApartments>
                <Coupons></Coupons>
                <ApartmentSlider></ApartmentSlider>
                <SecurityFeatures></SecurityFeatures>
                <Testimonials></Testimonials>
                <OurLocation></OurLocation>
            </div>
        </div>
    );
};

export default Home;