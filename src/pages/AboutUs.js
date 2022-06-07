import React from 'react';
import AboutInfo from '../components/AboutPageInfo.js';
import StoreSection from '../components/StoreSection';
import './pages-styles/AboutUs.css';

class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <AboutInfo />
                <StoreSection />
            </div>
        )
    }
}

export default AboutUs;