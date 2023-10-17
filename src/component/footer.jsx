import React from 'react'
import logo from '../images/logo.png';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';


const Footer = () => {
    return (
        <div className='footer section-padding'>
            <div>
                <img src={logo} alt="logo" style={{width: 80}}/>

                <div className='section-social'>
                    <div className='text ts'><a href='#'>privacy policy</a></div>
                    <div className='social-icons'>
                        <a href='#'> <BsFacebook /></a>
                        <a href='#'><BsInstagram /></a>
                        <a href='#'><BsYoutube /></a>
                    </div>
                    <div className='text te'><a href="mailto:hello@yourcompany">hello@yourcompany.com</a></div>
                </div>

                <a href="https://www.yourcompany.com." target='_blank' rel="noreferrer"><p className='mt-5'>2023 (c) RM Dhammike Rathnayaka</p></a>

            </div>

        </div>
    )
}

export default Footer
