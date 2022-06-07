import React from "react";
import { Link } from "react-router-dom";
import './component-styles/HeroSection.css';

const HeroSection = () => {
        return (
        <section className="hero-section">
                <div className="hero-section_heading-container">
                        <h1 className="hero-section_h1">Orange Pangea</h1>
                        <p className="hero-section_p">Delivering Laughs Straight to Your Door!</p>
                        <div className="orange-box medium hero-box-left"></div>
                        <div className="purple-box small hero-box-right"></div>
                </div>
                <div className="hero-section_info-container">
                        <div className="hero-section_info call-now">
                                <p className="centered-subtext"><span className="bold-subtext">Call Now</span> for more information</p>
                                <a className="button green-button call-now_button" href="tel: +15555555555">Call Us!</a>
                        </div>
                        <div className="hero-section_info sign-up">
                                <p className="centered-subtext"><span className="bold-subtext">Sign up</span> and recieve a 10% discount!</p>
                                <Link to='/sign-up' className="button orange-button sign-up_button">Sign Up!</Link>
                        </div>
                </div>
        </section>
        )
}

export default HeroSection;