import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {
    const { all_products, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className="main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="item-format main">
                            <img src={e.image} alt="" className='product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className='removeicon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="items-down">
                <div className="items-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="item-total">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="item-total">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="item-total">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed to Check-out</button>
                </div>
                <div className="promo">
                    <p>Coupon code if available</p>
                    <div className="promobox">
                        <input type="text" placeholder='Coupon Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    
  )
}
