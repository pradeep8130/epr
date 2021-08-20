import React from 'react';

const WhatwedoList = ({items}) => {
    return (
        <>
         <div className="col-md-4 mt-4 pt-2">
            <figure>
               <a href={items.Url}>
                  <div className="img"><img width="368" height="453" src={items.media} alt={items.title} title={items.title}  /> </div>
                  <figcaption>
                     <h3>{items.title}</h3>
                  </figcaption>
               </a>
            </figure>
         </div>  
        </>
    )
}
export default WhatwedoList
