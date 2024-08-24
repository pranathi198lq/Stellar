import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import insta_icon from '../Assets/instagram_icon.png'
import pin_icon from '../Assets/pintester_icon.png'
import whats_icon from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>Stellar</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Facilities</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footers-icon-cont">
            <img src={insta_icon} alt="" />
          </div>
          <div className="footers-icon-cont">
            <img src={pin_icon} alt="" />
          </div>
          <div className="footers-icon-cont">
            <img src={whats_icon} alt="" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @2024- All Rights Reservered</p>
        </div>
    </div>
  )
}
