import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Specialists from '../Specialists/Specialists';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <hr className="w-75 mx-auto" />
            <Specialists></Specialists>
        </div>
    );
};

export default Home;