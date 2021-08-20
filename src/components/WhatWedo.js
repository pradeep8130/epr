import React from 'react';
import WhatwedoList  from "./WhatwedoList";
const whatWedo = ({whatdo, title, info}) => {
    return (
        <>
         <section className="epr-whatwedo  padd60 mb-3">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="heading-style text-center">
                        <h2>{title}</h2>
                        <p>{info}</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                    {whatdo.map((items) => {
                       return  <WhatwedoList items={items} key={items.id} />
                   })}                        
               </div>
            </div>
         </section>  
        </>
    )
}
export default whatWedo