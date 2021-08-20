import React from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navigation = () => {
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    return (
        <div>
          <div className="topmenu">
			<div className="cssmenu">
			 	<nav id="cssmenu" className="menu-navigation cssmenu">
                   <ul>  
                    <li className={splitLocation[1] === "about" ? "active" : ""}><Link to="/about">About</Link></li>
                    <li className={splitLocation[1] === "custom-concrete-pools" ? "active" : ""}><Link to="/custom-concrete-pools">Custom Pools and Spas</Link></li>
                    <li className={splitLocation[1] === "inground-pools" ? "active" : ""}><Link to="/inground-pools">Pool Process</Link></li>
                    <li className={splitLocation[1] === "outdoor-living" ? "active" : ""}><Link to="/outdoor-living">Outdoor Living</Link></li>
                    <li className={splitLocation[1] === "gallery" ? "active" : ""}><Link to="/gallery">Gallery</Link></li>
                    <li className={splitLocation[1] === "resources" ? "active" : ""}><Link to="/resources">Resources</Link></li>
                    <li className={splitLocation[1] === "contact" ? "active" : ""}><Link to="/contact">Contact</Link></li>      
                   </ul>										
                </nav> 
				</div>
			</div>
        </div>
    )
  
}
export default Navigation