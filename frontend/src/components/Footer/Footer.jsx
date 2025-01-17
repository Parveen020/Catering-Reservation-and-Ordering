import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="Footer" id="Footer" >
        <div className="Footer-content">
            <div className="Footer-content-left">
                <a href="/"><img src={assets.logo} alt=""/> </a>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='Footer-social-icons'>
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                </div>
            </div>
            <div className="Footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
            <div className="Footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-655-462</li>
                <li>contact@tomato.com</li>
            </ul>
            </div>
        </div>
        <hr/>
        <p className="Footer-copyright">Copyright 2024 © HomeIt - All Rights Reserved</p>
    </div>
  )
}

export default Footer
