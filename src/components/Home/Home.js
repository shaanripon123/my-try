import React from 'react';
import '../Home/Home.css'
import Service from './Service/Service';
import BussinessInfo from './BussinessInfo/BussinessInfo';
import Help from './Help/Help';
import Interest from './Interest/Interest';
import Work from './Work/Work';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <BussinessInfo></BussinessInfo>
            <Help></Help>
            <Interest></Interest>
            <Work></Work>
        </div>
    );
};

export default Home;