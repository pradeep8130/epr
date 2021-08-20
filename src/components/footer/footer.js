import React from 'react';
import svgMap from "../../assets/images/svg/address.svg";
import phoneSvg from "../../assets/images/svg/phone.svg";
import emailSvg from "../../assets/images/svg/email.svg";
const footer = () => {
    return (
        <>
        <footer id="colophon" className="site-footer primary-bg pt60">
        	<div className="container">
		    <div className="footer-infobx pl-5 pr-5  d-flex flex-wrap justify-content-between">
			<div className="addressBx d-flex align-items-center mt-2 mb-2"><i><img width="55" src={svgMap} alt="Address" title="Address" /></i>
				<div className="txtbox ml-2"><span className="title f22 d-block">Address:</span> <span className="txt"><a href="https://goo.gl/maps/FVK43VrtAhLj5pKm8" target="_blank">10320 Durant Road Suite 109, Raleigh NC 27614</a></span> </div>
			</div>
			<div className="addressBx phonebx d-flex align-items-center mt-2 mb-2"> <i> <img width="55" src={phoneSvg} alt="Phone" title="Phone" /></i>
				<div className="txtbox ml-2"><span className="title f22 d-block">Phone:</span> <span className="txt"><a href="tel:(919) 306-8583">(919) 306-8583</a></span> </div>
			</div>
			<div className="addressBx emailbx d-flex align-items-center mt-2 mb-2"> <i> <img width="58" src={emailSvg} alt="Email" title="Email" /></i>
				<div className="txtbox ml-2"><span className="title f22 d-block">Email:</span> <span className="txt"><a href="mailto:inquiries@extremepoolsrn.com">inquiries@extremepoolsrn.com</a></span> </div>
			</div>
		</div>
		<div className="row mt-4 pt-3">
			<div className="col-md-6 col-lg-5">
				<div className="importantLinks">
					<h4>Important Links</h4>
					<nav id="footermenu" className="footermenu">
						<ul>
							<li><a href="#">About</a></li>
							<li><a href="#">Gallery</a></li>
							<li><a href="#">Inground Pools</a></li>
							<li><a href="#">Testimonials</a></li>
							<li><a href="#">Spas</a></li>
							<li><a href="#">Resources</a></li>
							<li><a href="#">Outdoor Living</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
					 </nav> 
                     <a target="_blank" href="" className="btn-secondary btn mt-4">Apply for Financing</a>
                    </div>
			</div>
			<div className="col-md-6 col-lg-7 d-flex justify-content-end pb-2">
				<div className="location">
					<h4>Visit Our Location</h4>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.727956012632!2d-78.58891778438382!3d35.90467792529159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5742f7e451ed%3A0x66c37ab29dacc931!2s10320%20Durant%20Rd%2C%20Raleigh%2C%20NC%2027614%2C%20USA!5e0!3m2!1sen!2sin!4v1619002039916!5m2!1sen!2sin" style={{border: 0}} allowfullscreen="" loading="lazy" width="634" height="264"></iframe>
				</div>
			</div>
		</div>
	</div>
	<div className="copyright pt-3 pb-3  d-flex align-items-center justify-content-between mt-5">
		<div className="container">
			<div className="row">
				<div className="col-md-12 justify-content-between d-flex flex-wrap align-items-center">
					<div className="txt"> © 2021 Extreme Pools Renovations. All Rights Reserved. | Website Designed &amp; Maintained by <a href="https://www.mrnwebdesigns.com/" target="_blank"> MRN Web Designs.</a> </div>
					<div className="soical_links">
						<ul className="d-flex social-icons">
							<li><a className="social-icon social-icon--facebook" target="_blank" href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i>
								<div className="tooltip">facebook</div>
								</a> </li>
							<li><a className="social-icon social-icon--twitter" target="_blank" href="https://twitter.com/?lang=en"><i className="fa fa-twitter" aria-hidden="true"></i>
								<div className="tooltip">twitter</div>
								</a> </li>
							<li><a className="social-icon social-icon--linkedin" target="_blank" href="https://in.linkedin.com/"><i className="fa fa-linkedin" aria-hidden="true"></i>
								<div className="tooltip">linkedin</div>
								</a> </li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-contact-btn"><a href="#" className="contactbtn">Contact</a></div>
		</div>
	</div>
</footer>
        </>
    )
}

export default footer
