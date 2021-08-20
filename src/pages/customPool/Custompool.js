import React from 'react';
import heroImg from "../../assets/images/custom-pool.jpg";   
import Hero from "../../components/Hero";   
import WhatWedo from "../../components/WhatWedo";
import PoolBuilder from "../../components/poolBuilder";
import ViewGallery from "../../components/ViewGallery";

import blockImg from '../../assets/images/Extreme-Pools-Home-page-photo-1-672x446.jpg';
import ingroundPoolsImg from "../../assets/images/Home-page-inground-pools-368x453.jpg";
import DesignedSpaImg from "../../assets/images/designed-spas.webp";
import OutdoorImg from "../../assets/images/Home-Page-outdoor-living-spaces-368x453.jpg";
const whatdo = [
    {
       id: 1,
       title: 'Concrete/Gunite',
       media: ingroundPoolsImg,
       Url: ''
    },
    {
       id: 2,
       title: 'Fiberglass',
       media: DesignedSpaImg,
       Url: ''
    },
    {
       id: 3,
       title: 'Liner',
       media: OutdoorImg,
       Url: ''
    }
 ]

export default function Custompool() {
    return (
        <div>
             <Hero title="Inground Pools" heroImg={heroImg}  />  
             <PoolBuilder blockImg={blockImg} title="Your Raleigh, NC Custom Inground Pool Builder" smallTxt="When it comes to swimming pools and backyard dreams, Extreme Pools Renovations builds and installs custom concrete pools, built-in spas, and your outdoor living space. Our team specializes in building custom inground swimming pools, grottos waterfalls, outdoor kitchens, hardscaping, all types of decking, and more." />
             <WhatWedo whatdo={whatdo}  title="Custom Swimming Pools" />
             <ViewGallery title="Pool Shapes & Styles" shortdesc="Discover the elegance and style of a custom concrete swimming pool"  />
             
        </div>
    )
}
