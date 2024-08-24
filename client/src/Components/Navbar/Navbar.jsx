import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import drop_down from '../Assets/nav-dropdown.png'

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getCartCount} = useContext(ShopContext);
    //responsive for- 800- click an icon to display the whole menu
    const menuRef = useRef();
    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <Link to='/' style={{color: 'black', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center'}}>
            <img src={logo} alt="" />
            <p style={{paddingTop: '10px', paddingLeft: '10px'}}>Stellar</p>
            </Link>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={drop_down} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=> {setMenu("new arrivals")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"? <hr/>: <></>}</li>
            <li onClick={()=> {setMenu("men")}}><Link style={{textDecoration: 'none'}} to='/men'>Men</Link>{menu==="men"? <hr/>: <></>}</li>
            <li onClick={()=> {setMenu("women")}}><Link style={{textDecoration: 'none'}} to='/women'>Women</Link>{menu==="women"? <hr/>: <></>}</li>
            <li onClick={()=> {setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"? <hr/>: <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getCartCount()}</div>
        </div>

    </div>
  )
}
