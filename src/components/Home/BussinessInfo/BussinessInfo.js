import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import icon1 from '../../../images/icons/Icon@1X (1).png'
import icon2 from '../../../images/icons/Icon@1X.png'
const infoData = [
    {
        icon: <img src={icon1} alt="" />,
        title:'Web design',
        description:'We provide asesome website design '
    
    },
    {
        icon: <img src={icon2} alt="" />,
        title:'Web development',
        description:'We have best developers around the world '
    },
    {
        icon: <img src={icon2} alt="" />,
        title:'UI/UX design',
        description:'We provide awesome UI/UX design '
    }
]

const BussinessInfo = () => {
    return (
        <section className="row">
            {
            infoData.map(info => <InfoCard info = {info} ></InfoCard>)
            }
        </section>
    );
};

export default BussinessInfo;