import React, { useState, useEffect } from 'react'
import './styles.scss';
import { Link } from 'react-router-dom'
import { Button } from '../button/Button'

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showMenuButton = () => {
        if(window.innerWidth <= 980) {
            setButton(true);
            setClick(false);
        } else {
            setButton(false);
        }
    }

    useEffect(() => {
        showMenuButton();
    }, []);

    window.addEventListener('resize',showMenuButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        Gizmor
                    </Link>

                    {button && <div className="menu-icon" onClick={handleClick}>{click ? 'C' : 'M'}</div>}

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/product' className='nav-links' onClick={closeMobileMenu}>
                                Product
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/support' className='nav-links' onClick={closeMobileMenu}>
                                Support
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/resources' className='nav-links' onClick={closeMobileMenu}>
                                Resources
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/pricing' className='nav-links' onClick={closeMobileMenu}>
                                Pricing
                            </Link>
                        </li>
                        <div className="nav-item">
                            <Button onClick={closeMobileMenu}>Get Started</Button>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
