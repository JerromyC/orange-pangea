import React from "react";
import './component-styles/AboutSection.css';

// IMage Imports
import groupImage from '../assets/undraw_people_re_8spw.svg';
import { Link } from "react-router-dom";

const AboutSection = () => {
        return (
        <section className="about-section">
                <h2 className="section_body-heading">Our Values</h2>
                <div className="about-section_body-container">
                        
                        <div className="about-section_boxes square-container">
                                <div className="about-section_image-wrapper green-box large">
                                        <img className="about-section_image" src={groupImage} alt="#"></img>
                                </div>
                                <div className="about-section_purple-box purple-box medium"></div>
                                <div className="about-section_orange-box orange-box small"></div>
                        </div>
                        <div className="about-section_body-text">
                                
                                <p className="about-section_body-copy">All of us at Orange Pangea are comedy film buffs, and as such, we stand behind our movies and offer a 100% money back guarantee on any purchase made! </p>
                                <p className="about-section_body-copy">If you dont love it, we buy it back at full price; no question.</p>
                                <p className="about-section_body-copy">Wether you are going through a tough time, or just want to relax and have a good laugh, there is always time to catch a funny flick to help boost your outlook on life!</p>
                                <p className="about-section_body-copy">Thats why we created this Movie Delivery Company in the first place, to share good movies with  good people.</p>
                                <p className="about-section_body-copy">Jump over to our ‘About Us’ page to find out more!</p>
                                <Link to='/about' className="about-us_button button orange-button">More About Us</Link>
                        </div>
                        
                </div>
        </section>
        )
}

export default AboutSection;