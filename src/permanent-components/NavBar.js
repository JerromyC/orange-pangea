import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './permanent-components-styles/NavBar.css'

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false)
    //     } else {
    //         setButton(true);
    //     }
    // };

    // useEffect(() => {
    //     showButton();
    // }, []);

    // window.addEventListener('resize', showButton);


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/store' className='nav-links' onClick={closeMobileMenu}>
                                The Store
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/policy'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links nav-bar_sign-up'
                                onClick={closeMobileMenu}
                            >
                                Sign Up!
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
      )
}

export default NavBar;








// import React from "react";
// import '../permanent-components/permanent-comonents-styles/NavBar.css';

// const NavBar = () => {

//     return (
//         <div className="navbar">
//             <div className="navbar_link-container">
//                 <a className="navbar_nav-link" href="#" /*onClick={loadHome}*/>Home</a>
//                 <a className="navbar_nav-link" href="#" /*onClick={loadAbout}*/>About</a>
//                 <a className="navbar_nav-link" href="#" /*onClick={loadStore}*/>Store</a>
//                 <a className="navbar_nav-link" href="#" /*onClick={loadPolicy}*/>Privacy Policy</a>
//             </div>
//         </div>
//     )
// }

// export default NavBar;