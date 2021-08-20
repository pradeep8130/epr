import React from 'react'
import heroImg from "../../assets/images/gallery.jpg";
import Hero from "../../components/Hero";
export default function gallery() {
    return (
        <div>
             <Hero title="Gallery" heroImg={heroImg}  />  
        </div>
    )
}
