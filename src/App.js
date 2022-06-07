import React from "react";
import NavBar from "./permanent-components/NavBar";
import FooterSection from './permanent-components/FooterSection';
import LandingPage from './pages/LandingPage.js';
import AboutUs from './pages/AboutUs.js';
import Store from './pages/Store.js'
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SignUp from "./pages/SignUp";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './index.css';

function App() {
        return (
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' exact element={<LandingPage />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/store' element={<Store />} />
                    <Route path='/policy' element={<PrivacyPolicy />} />
                    <Route path='/sign-up' element={<SignUp />} />
                </Routes>
                <FooterSection />
            </Router>
        );
    }


export default App;