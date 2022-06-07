import React from "react";
import './component-styles/StoreSection.css';
import storeImage from '../assets/undraw_empty_cart_co35.svg'

const StoreSection = () => {
        return (
        <section className="store-section">
                <h2 className="section_body-heading">The Store</h2>
                <div className="store-section_body-container">
                        <div className="store-section_body-text">
                                <p className="store-section_body-copy">We have poured our hearts and souls into selecting only the finest and funniest films for you to enjoy alone or with family and friends. </p>
                                <p className="store-section_body-copy">NOTE: we do have a few comedies in our collection that are not suitable for children, so check the ratings and reviews.</p>
                                <p className="store-section_body-copy">No matter the sub-genre, you can bet that ANY movie you get from us will be geared towards making you laugh until your sides split!</p>
                                <p className="store-section_body-copy">What are you waiting for? Go check out our movies!</p>
                                <a className="store_button button orange-button" href="/store">To the Store!</a>
                        </div>
                        <div className="store-section_boxes square-container">
                                <div className="store-section_image-wrapper purple-box large">
                                        <img className="store-section_image" src={storeImage} alt="#"></img>
                                </div>
                                <div className="store-section_green-box green-box medium"></div>
                                <div className="store-section_orange-box orange-box small"></div>
                        </div>
                </div>
        </section>
        )
}

export default StoreSection;