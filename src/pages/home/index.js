import React from 'react'
import Hero from "../../components/Hero";
import PoolBuilder from "../../components/poolBuilder";
import DesignConsultation from "../../components/designConsultation";
import WhatWedo from "../../components/WhatWedo";
import CustomProject from "../../components/CustomProject";
import ViewGallery from "../../components/ViewGallery";

/**/
import heroImg from "../../assets/images/home-hero.webp";
import blockImg from '../../assets/images/Extreme-Pools-Home-page-photo-1-672x446.jpg';
import ingroundPoolsImg from "../../assets/images/Home-page-inground-pools-368x453.jpg";
import DesignedSpaImg from "../../assets/images/designed-spas.webp";
import OutdoorImg from "../../assets/images/Home-Page-outdoor-living-spaces-368x453.jpg";
import customOutdoorIMg from "../../assets/images/custom-outdoor.webp";
const whatdo = [
    {
       id: 1,
       title: 'Inground Pools',
       media: ingroundPoolsImg,
       Url: ''
    },
    {
       id: 2,
       title: 'Designed Spas',
       media: DesignedSpaImg,
       Url: ''
    },
    {
       id: 3,
       title: 'Outdoor Living Spaces',
       media: OutdoorImg,
       Url: ''
    }
 ]
export default function index() {
    return (
        <>
           <Hero classHero='home-banner' title="Custom Luxury Inground Pools, Spas and Outdoor Living Spaces" heroImg={heroImg}  />
           <PoolBuilder blockImg={blockImg} title="Your Raleigh, NC Custom Inground Pool Builder" smallTxt="When it comes to swimming pools and backyard dreams, Extreme Pools Renovations builds and installs custom concrete pools, built-in spas, and your outdoor living space. Our team specializes in building custom inground swimming pools, grottos waterfalls, outdoor kitchens, hardscaping, all types of decking, and more." />
           <DesignConsultation title="Design Consultation & Estimate" shortdesc="Design consultant will come and meet with you and will present in our design center the cost of you pool and sample materials." link="d" btnvalue="Schedule Today!" />
            <WhatWedo whatdo={whatdo} info="At Extreme Pools Renovations, every backyard is an opportunity. We will help you transform your outdoor living space into your your dream backyard. Whether you have a vision or want us to come up with one for you, our team of experts are here to guide you through a complex road of design and construction." title="What We Do" />
            <ViewGallery />
           <CustomProject customOutdoorIMg={customOutdoorIMg} />
        </>
    )
}
