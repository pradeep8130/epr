import React from 'react'
//import ExtremePoolsImage from "../assets/images/Extreme-Pools-Home-page-photo-1-672x446.jpg";
export default function poolBuilder({title, smallTxt, blockImg}) {
    return (
        <>
        <section className="epr-inground padd75">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-5">
                    <article className="d-flex flex-wrap">
                    <div className="heading-style">  
                     {title.length >  0 &&  <h2> {title}</h2> }                   
                    </div>
                    {smallTxt.length > 0 && <p> {smallTxt}</p> }
                    <p><span class="f19">Email us at : <a class="links" href="mailto:inquiries@extremepoolsrn.com">inquiries@extremepoolsrn.com</a></span></p>
                    </article>
                </div>
                <div className="col-md-12 col-lg-7">
                    <figure>
                    <img src={blockImg}  alt="" title="" />
                    <figcaption className="gradientclr float-right">Call us today at: <strong><a href="tel:(919) 306-8583">(919) 306-8583</a></strong></figcaption>
                    </figure>

               

                </div>
            </div>
        </div>
        </section>           
        </>
    )
}
