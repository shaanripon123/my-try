import React, { useState } from 'react'; 
import help from '../../../images/help.png';


const Help = () => {
    const [readMore, setReadMore] = useState(false);
const extraContent=<div>
<p className="extra-content">
  skjfdfsd irt Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam deserunt molestias consequuntur. Modi itaque perferendis natus ab ex voluptatem. Nobis aliquam est quos quidem exercitationem eaque minima. Aspernatur, quas ab.
</p>
</div>
const linkName=readMore?'Read Less':'Read More'

    return (
        <div className="row d-flex align-items-center ">
            <div className="col-md-5 offset-md-1">
                <h1>We Are Here To Help You With</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium dolor culpa iste, necessitatibus nemo!</p>
                {readMore && extraContent}
<button  onClick={()=>{setReadMore(!readMore)}} className="btn btn-warning see-more-btn">{linkName}</button>
            </div>
            <div className="col-md-5 offset-md-1">
                    <img src={help} alt="" className="img-fluid" />
                </div>
        </div>
    );
};

export default Help;
