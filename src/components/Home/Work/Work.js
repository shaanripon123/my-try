import React from 'react';
import './Work.css';
import work1 from '../../../images/Mask Group 3@1X.png';

const Work = () => {
    return (
        <div className="text-center background text-white">
            <h1>Our latest projects</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisici consequatur illum voluptatibus debitis modi!</p>
            <img className="img-fluid ab" src={work1} alt="" />
        </div>
    );
};

export default Work;