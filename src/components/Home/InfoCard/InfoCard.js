import React from 'react';
import './InfoCard.css'

const InfoCard = ({info}) => {
    console.log(info);
    return (

<div className="col-md-3 offset-md-1">
               {info.icon}
            <h6>{info.title}</h6>
            <small>{info.description} </small>
        </div>

    );
};

export default InfoCard;