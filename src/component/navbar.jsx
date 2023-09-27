import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../images/logo.png';
import { useState } from 'react';


const Menu = () => (
    <>
        <p>
            <a href="#features">Features</a>
        </p>
        <p>
            <a href="#benefits">Benefits</a>
        </p>
        <p>
            <a href="#choose-plan">Choose a Plan</a>
        </p>
        <p>
            <a href="#get-in-touch-plc">Get in touch</a>
        </p>
    </>
)

const Navbar = () => {
    const [toggleMenu, SetToggleMenu] = useState(false);
    return (
        <div className='navbar-main'>
            <div className='navbar-links'>
                <div className='navbar-logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='navbar-content'>
                    <Menu />
                </div>
            </div>
            <div className='navbar-demo'>

                <a href="#get-in-touch-plc" className='btn btn-primary'>Request a Demo</a>
            </div>

            <div className='navbar-menu'>
                {
                    toggleMenu
                        ? <RiCloseLine color='#000' size={27} onClick={() => SetToggleMenu(false)} />
                        : <RiMenu3Line color='#000' size={27} onClick={() => SetToggleMenu(true)} />
                }
                {
                    toggleMenu && (
                        <div className='navbar-menu-content'>
                            <div className='navbar-menu-links'>
                                <Menu />
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}


export default Navbar
