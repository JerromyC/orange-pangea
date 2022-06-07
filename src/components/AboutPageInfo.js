import React from "react";
import './component-styles/AboutPageInfo.css';
import groupImage from '../assets/undraw_people_re_8spw.svg';

const AboutInfo = () => {
    return (
        <section className="about-info_section">
            <h1 className="section_body-heading">What makes us tick?</h1>
            <p className="full-width_copy">Orange Pangea is a movie-by-mail company and we offer a selection of the best comedies available on DVD, Blu-Ray, digital download, and VHS. We have a variety of cult classics you and your friends will love, plus we probably have a few that you haven't even seen yet!</p>
            <p className="full-width_copy">The movies we sell vary from new releases to age-old classics to being that awesome feeling of nostalgia, all of which you can enjoy without leaving the comfort of your own home.</p>
            <div className="section_body-middle">
                <div className="section_body-middle-image-container square-container">
                        <div className="section_image-wrapper green-box large">
                                <img className="about-info_section_middle-image" src={groupImage} alt="#"></img>
                        </div>
\                       <div className="purple-box medium section_box-float-right"></div>
                        <div className="orange-box small section_box-float-left section_box-float-left"></div>
                </div>
                <div className="section_body-middle_text">
                        <p className="section_body-copy half-width_copy">Our main goal is to provide a hand-crafted list of comedies, sketches, and short films that are sure to leave you with busted rib cages!</p>
                        <p className="section_body-copy half-width_copy">Our business model is to hook you up with high-quality comedies by independent artists and big box office names alike, so there is a little something for everyone.</p>
                        <p className="section_body-copy half-width_copy">We have been in business for more than 10 years, and you can depend on us for quality customer care.</p>
                </div>
 
            </div>
            <p className="full-width_copy">Orange Pangea is the fastest-growing comedy movie delivery site on the web and the premier destination for full-length and classic stand-up comedy videos, independent films, and feature films available online. In 2020, we sold over $1.5 million in merchandise - and that was just from our three partners! We've been able to grow this business because of the fan support.</p>
            <p className="full-width_copy">Our mission is to give people who need to laugh what they want. It's that simple.</p>
            <p className="full-width_copy">Want to learn how you can become a part of this growing business? Sign up for the no-cost trial membership and get started today!</p>
        </section>
    )
}

export default AboutInfo;