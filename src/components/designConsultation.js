import React from 'react'
const designConsultation = ({title, shortdesc, link, btnvalue}) => {
    return (
        <>
        <section className="epr-constant primary-bg align-items-center d-flex" >
         <div className="container">
           <div className="row">	
             <div className="col-md-12">
                 <div className="text-center justify-content-center">
					<h2 className="h2">{title}</h2>
					 <p>{shortdesc}</p>
					    <a href={link} title="{shortdesc}" class="btn-secondary btn">{btnvalue}</a>
			    </div>
		        </div>
	         </div>
        </div>
        </section> 
        </>
    )
}

export default designConsultation
