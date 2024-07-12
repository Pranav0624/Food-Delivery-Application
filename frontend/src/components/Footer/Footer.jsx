import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Loren Ipsum is simply dummy text of the printing and hypersetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
                </div>

            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Deivery </li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+91 8237336774</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>

        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2024 @ Tomato.com - All Right Reserved.
        </p>


    </div>
  )
}
