import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom'

import FBSVG from '../../../assets/Images/FB-icon.svg'
import GHSVG from '../../../assets/Images/GH-icon.svg'
import InSVG from '../../../assets/Images/In-icon.svg'


function Footer() {
    return (
            <div className="footer">
                <div className="footer-container">
                    <div className="info">
                        <h1>Gizmor</h1>
                        <p>Gizmor@mail.com</p>
                        <p>+25 454 54 65</p>
                    </div>

                    <div className="links">
                        <h1>Quick</h1>
                        <Link to='/Product' className='links'><p>Product</p></Link>
                        <Link to='/Support' className='links'><p>Support</p></Link>
                        <Link to='/Resources' className='links'><p>Resources</p></Link>
                        <Link to='/Pricing' className='links'><p>Pricing</p></Link>
                    </div>

                    <div className="links">
                        <h1>Resources</h1>
                        <Link to='/Support' className='links'><p>Support</p></Link>
                        <Link to='/Contact' className='links'><p>Contact</p></Link>
                        <Link to='/Privacy' className='links'><p>Privacy & terms</p></Link>
                        <Link to='/Licenses' className='links'><p>Licenses</p></Link>
                        <Link to='/Map' className='links'><p>Site map</p></Link>
                        <Link to='/Cookie' className='links'><p>Cookie settings</p></Link>
                    </div>

                    <div className="links">
                        <h1>Social</h1>
                        <Link to='/Support' className='links'><img src={FBSVG} alt="Facebook"></img></Link>
                        <Link to='/Contact' className='links'><img src={GHSVG} alt="Github"></img></Link>
                        <Link to='/Privacy' className='links'><img src={InSVG} alt="linkedin"></img></Link>
                    </div>
                </div>
                <p>Etiam in pharetra massa. Sed eu pretium ipsum, semper pulvinar libero.</p>
            </div>
    )
}

export default Footer
