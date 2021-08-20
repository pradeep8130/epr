import React from 'react';
import logo from '../../assets/images/logo.png';
//import './header.css';
import Navigation from "./Navigation";
export default function header() {
    return (
        <div className="header-wrap">	
        <div className="header-top-bar primary-bg d-flex text-center align-items-center z-index">
            <div className="container">
                <span>Schedule a Consultation Today for Your Dream Backyard: <a href="tel:919 306-8583">919 306-8583</a></span>
            </div>
        </div>
        <header className="site-header white-bg d-flex">	
            <div className="container">	
                <div className="row  h-100">
                    <div className="col-md-3 col-4">
                                    <div className="siteLogo">
                                        <a href="/epr">
                                          <img src={logo} className="img-responsive" alt="Extreme pools Renovations" title="Extreme pools Renovations" />
                                        </a>
                                </div>
                            </div>
                            <div className="col-md-9 col-8 topmenuwrap d-flex align-items-center justify-content-end">
                                    <Navigation />
                        </div>
                    </div>
            </div>
        </header>
           </div>
    )
}
