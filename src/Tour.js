import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,removeTour}) => {
 const [readMore,setReadMore] = useState(false);
 const [readMoreString,setReadMoreString] = useState('Read More');
  return <section className='single-tour'>
    <img src= {image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
        <p>{readMore?info:`${info.substring(0,200)}...`}
        
        <button onClick={()=>{
          setReadMore(!readMore);
          setReadMoreString('Show Less')
        }}>{readMoreString}</button>
        </p>
        <button className='delete-btn' onClick={()=>removeTour(id)}>Not Interested</button>
    </footer>
  </section>;
};

export default Tour;
