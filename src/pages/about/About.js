import React from 'react'
import heroImg from "../../assets/images/home-hero.webp";
import Hero from "../../components/Hero";
//import DefaultContent from "../../components/defaultContent";
const About = () => {
    return (
        <div>
            <Hero title="About us" heroImg={heroImg}  />
            <div className="container">
               <div class="entry-content padd60">       
               <p>Extreme Pools Renovations was established in 2019 in Raleigh, NC by Mario Pineda.  We are a family-owned swimming pool contractor serving the Triangle and surrounding areas.</p>
               <p> We pride ourselves in having in-house crews, our own equipment, and the vast industry experience that our leadership provides to our clients. Extreme Pools Renovations strives to provide quality work that withstands the test of time. Ask yourself, what is my dream backyard paradise going to look like 10 years from now? </p>
            </div>
            </div>
        </div>
    )
}
export default About;