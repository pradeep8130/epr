import React from 'react';
const CustomProject = ({customOutdoorIMg}) => {
    return (
        <>
           <section className="epr-customproject padd75 aos-init aos-animate" id="section-4" data-aos="fade-up" data-aos-duration="1000">
                <div className="container ">
                     <div className="row">	
	  	                <div className="col-md-5">
                            <figure className="servicesListImg"><img width="469" height="585" src={customOutdoorIMg} alt="" /></figure>
                        </div>
                        <div className="col-md-7">
                          <div className="projectbody">
			            	<div className="heading-style"> 
				            	<h2 className="fclr">Our Custom Outdoor Living Projects Can Include:</h2>
				         </div>
					        <ul className="list-style">
					            <li>Water features including waterfalls, fountains and infinity edges</li>
					            <li>Integrated fire features including fire places, fire pits, and fire bowls</li>
					            <li>Pool lounge areas such as tanning ledges, beach entries, and swim out benches</li>
                                <li> Interactive, color-changing LED lights</li>
					            <li>Fully-automated pool and accessory control systems</li>
                                <li>Hydrotherapeutic heated spas with high-action jets</li>
					            <li>Creative hardscapes, including bridges, walkways, and deck areas</li>
					            <li>Integrated landscaping</li>
				           </ul>
			                </div>
                         </div>	
                     </div>
                </div>
            </section>
        </>
    )
}
export default CustomProject
