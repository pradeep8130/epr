import React from 'react';
import galleryBg from "../assets/images/gallery-img.webp";
let title, shortdesc, url, btnvalue;
title = "Looking for Inspiration?";
shortdesc = "Discover the elegance and style of a custom concrete swimming pool";
btnvalue = "View Photo Gallery";
url = "";
const ViewGallery = ({title, shortdesc}) => {
    return (
        <>
          <section className="epr-lookingInspiration mt-5 blackOverlay d-flex align-items-center justify-content-center aos-init aos-animate" 
                style={{backgroundImage:`url(${galleryBg})`}}>
                <div className="container">
		            <div className="lookingBx zindex whitebg text-center justify-content-center d-flex flex-wrap p-4">
			            <h2>{title}</h2>
			                <span className="f18">{shortdesc}</span>
                            <a href="#" title={url} className="btn-primary btn">{btnvalue}</a>
					</div>
                </div>
            </section>  
        </>
    )
}
export default ViewGallery
