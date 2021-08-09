
import React, { useState } from 'react';
import './Readmore.css';


const ReadMore = () => {
    const [readMore, setReadMore] = useState(false);
        console.log('clicked me');
        const extraContent=<div>
        <p className="extra-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
          porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
          commodi officia aliquam! Maxime.
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