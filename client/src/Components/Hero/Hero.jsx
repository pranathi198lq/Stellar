import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="heroleft">
            <h2>New Arrivals</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collections</p>
                <p>for Everyone</p>
            </div>
            <div className="herolatestbutton">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="heroright">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}
