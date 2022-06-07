import React from "react";
import './component-styles/InfoSection.css';

// image imports
import fastTruck from '../assets/truck-fast-solid.svg';
import dollarBill from '../assets/money-bill-transfer-solid.svg';
import searchGlass from '../assets/sistrix-brands.svg';
import couchImage from '../assets/undraw_home_cinema_l7yl.svg';

const InfoSection = () => {
        return (
        <section className="info-section">
                <div className="info-section_benefits-container">
                        <div className="info-section_benefits-item">
                                <img className="info-section_benefits-image " src={fastTruck}></img>
                                <p className="info-section_benefits-text">Speedy 2-day Delivery!</p>
                        </div>
                        <div className="info-section_benefits-item">
                                <img className="info-section_benefits-image" src={dollarBill}></img>
                                <p className="info-section_benefits-text">Money Back Guarantee</p>
                        </div>
                        <div className="info-section_benefits-item">
                                <img className="info-section_benefits-image" src={searchGlass}></img>
                                <p className="info-section_benefits-text">Largest Library Online</p>
                        </div>
                </div>
                <div className="info-section_body">
                        <h2 className="section_body-heading">Funny Movies for Sale!</h2>
                        <p className="section_body-copy full-width_copy">There is nothing like settling down with your favorite snack and beverage combination (other people optional) to relax and unwind with an awesome movie. If you are like us, and you are here so you must be, you are always on the hunt for the next ‘Gut Busting’ collection of comedies to add to your list. Well, look no further because we have done all the dirty work for you! All you need to do is focus on deciding which funny film you want us to send you next!</p>
                        <div className="section_body-middle">
                                <div className="section_body-middle_text">
                                        <p className="section_body-copy half-width_copy">Our collection is extensive, and we make sure that all items are in tip-top condition before they are shipped.</p>
                                        <p className="section_body-copy half-width_copy">If faster is more your speed, we offer digital movie codes so you can get straight to the funny and skip the wait.</p>
                                        <p className="section_body-copy half-width_copy">We even have a very vast VHS collection for those who seek a little nostalgia straight out of the 90’s; Be Kind, Rewind!</p>
                                </div>
                                <div className="section_body-middle-image-container square-container">
                                        <div className="section_image-wrapper orange-box large">
                                                <img className="section_middle-image" src={couchImage} alt="#"></img>
                                        </div>
\                                        <div className="purple-box medium section_box-float-right"></div>
                                        <div className="green-box small section_box-float-left"></div>
                                </div>
                        </div>
                        <p className="section_body-copy full-width_copy">From abstract to zany, we have got you covered with our comedic movie goldmine! If you cant figure out which hilarious actor you want to watch next, give us a call and we will have someone ready to help you find the perfect seam splitting cinema to satiate your need for humor and hijinx!</p>
                </div>
        </section>
        )
}

export default InfoSection;