import React from 'react'
const Hero = ({title, heroImg, classHero}) => {
    return (
        <>
        <section className={`${classHero} flex-wrap d-flex align-items-center whitetxt blackOverlay text-center-button-container`} 
           style={{backgroundImage:`url(${heroImg})`}}>
              <div className="container zindex text-center">
                  <div className="banner-info">
                   <h1>{title} </h1>
           </div>
           </div>
       </section>
        </>
    )
}
export default Hero;

Hero.defaultProps = {
    classHero: 'innerbanner'
}
