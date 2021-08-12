import React from 'react';
import inta from '../../../images/Image@1X (1).png';

const Interest = () => {
    return (
        <div className="row d-flex align-items-center">
        <div className="col-md-5 offset-md-1">
        <img src={inta} alt="" className="img-fluid" />
    </div>
    <div className="col-md-5 offset-md-1">
    <h1>Interesrted to work with us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium dolor culpa iste, necessitatibus nemo!</p>
    <input placeholder="Enter your E-mail"></input>
    <button className="btn btn-warning see-more-btn">Send</button>

    </div>
        </div>
    );
};

export default Interest;



