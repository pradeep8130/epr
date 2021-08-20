import React from 'react';
import Home from "./home/index";
import About from "./about/About";
import Contact from "./contact/Contact";
import Resources from "./resources/Resources";
import Custompool from "./customPool/Custompool";
import Gallery from "./gallery/gallery";
import PoolProcess from "./poolProcess/PoolProcess";
import OutdoorLiving from "./outdoorLiving/outdoorLiving";
import { Switch, Route } from "react-router-dom";
export default function Layout() {
    return (
        <>  
      <Switch> 
      <Route react path="/contact"> <Contact /> </Route>
      <Route react path="/resources"> <Resources /> </Route>
      <Route react path="/gallery"> <Gallery /> </Route>
      <Route react path="/outdoor-living"> <OutdoorLiving /> </Route>
      <Route react path="/inground-pools"> <PoolProcess /> </Route>
      <Route react path="/custom-concrete-pools"> <Custompool /> </Route>
      <Route react path="/about"> <About /> </Route>
      <Route react path="/"><Home /></Route>
      
      </Switch> 
       </>
    )
}
