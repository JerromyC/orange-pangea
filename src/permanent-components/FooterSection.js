import React from "react";
import { Link } from 'react-router-dom';
import '../permanent-components/permanent-components-styles/FooterSection.css';

// IMAGE IMPORTS

// import fb from '../assets/facebook-f-brands.svg';
// import twitter from '../assets/twitter-brands.svg';
// import google from '../assets/google-brands.svg';

const FooterSection = () => {
        return (
        <section className="footer-section">
                <div className="footer-section_item-wrapper">
                        <div className="footer-section_item">
                                <h3 className="footer-section_heading ">Orange Pangea</h3>
                        </div>
                        <div className="footer-section_item">
                                <ul className="footer-section_navbar" >
                                        <li className="footer-section_navlink home">
                                        <Link to='/' className='footer_nav-link'>
                                                Home
                                        </Link>
                                        </li>
                                        <li className="footer-section_navlink about">
                                        <Link to='/about' className='footer_nav-link'>
                                                About Us
                                        </Link>
                                        </li>
                                        <li className="footer-section_navlink store">
                                        <Link to='/store' className='footer_nav-link'>
                                                The Store
                                        </Link>
                                        </li>
                                        <li className="footer-section_navlink privacy">
                                        <Link to='/policy' className='footer_nav-link'>
                                                Privacy Policy
                                        </Link>
                                        </li>
                                </ul>
                        </div>
                        <div className="footer-section_item">
                                <p className="footer-section_text">Contact Us!</p>
                                <div className="footer-section_social-wrapper">
                                        <a href="https://www.facebook.com/"><i className="footer-section_social-link fb"></i></a>
                                        <a href="https://twitter.com/home?lang=en"><i  className="footer-section_social-link twitter"></i></a>
                                        <a href="https://www.google.com/"><i  className="footer-section_social-link google"></i></a>
                                </div>
                        </div>
                </div>
        </section>
        )
}

export default FooterSection;