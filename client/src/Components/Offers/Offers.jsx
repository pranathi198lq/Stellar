import React from 'react'
import './Offers.css'
import eclusive_image from '../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offersleft">
            <h1>Exclusive</h1>
            <h1>Offers for You</h1>
            <p>Only on BestSellers Product</p>
            <button>Check now</button>
        </div>
        <div className="offersright">
            <img src={eclusive_image} alt="" />
        </div>
    </div>
  )
}
