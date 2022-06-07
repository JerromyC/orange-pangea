import React from 'react';
import HeroSection from '../components/HeroSection.js';
import InfoSection from '../components/InfoSection.js';
import AboutSection from '../components/AboutSection.js';
import StoreSection from '../components/StoreSection.js';

import './pages-styles/LandingPage.css';

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <HeroSection />
                <InfoSection />
                <AboutSection />
                <StoreSection />
            </div>
        )
    }
}

export default LandingPage;