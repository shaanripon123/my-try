
import React, { useState } from 'react';
import './Readmore.css';


const ReadMore = () => {
    const [readMore, setReadMore] = useState(false);
        const extraContent=<div>
        <p className="extra-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam deserunt molestias consequuntur. Modi itaque perferendis natus ab ex voluptatem. Nobis aliquam est quos quidem exercitationem eaque minima. Aspernatur, quas ab.
        
         
        </p>
    </div>
    const linkName=readMore?'Read Less':'Read More'
  
    return (
        <div>
        {readMore && extraContent}
      <button  onClick={()=>{setReadMore(!readMore)}} className="btn btn-warning see-more-btn">{linkName}</button>
      </div>
    );
};

export default ReadMore;