import React from 'react'
import '../css/Footer.css'

import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='foot-branding'>
            <span>Code & Design by </span>
            <img src={require('../assets/NitesOut Crown White.png')}/>
            <span>NitesOut Entertainment</span>
            <a target="_blank" href="https://www.instagram.com/nitesoutent/">
                <FaInstagram className='foot-social'/>
            </a>
            <a target="_blank" href="https://twitter.com/nitesoutent">
                <FaTwitter className='foot-social'/>
            </a>
            <a target="_blank" href="">
                <FaTiktok className='foot-social'/>
            </a>
        </div>

        <p>niteoutentertainment2022@gmail.com</p>

    </div>
  )
}

export default Footer