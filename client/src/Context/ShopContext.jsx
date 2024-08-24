import React, { createContext, useState } from "react";
import all_products from '../Components/Assets/all_product'

export const ShopContext= createContext(null);
//empty cart
const getDefaultCart = ()=>{
    let cart={};
    for (let index = 0; index < all_products.length+1; index++) {
        cart[index]=0;            
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const [cartItems, setCartItems] = useState(getDefaultCart());

    //addtocart function:
    const addToCart= (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}));
        console.log(cartItems);
    }

    const removeFromCart= (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}));
    }

    //total cart amount:
    const getTotalCartAmount=()=> {
        let totalAmt=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo= all_products.find((product)=>product.id===Number(item));
                totalAmt+=itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmt;
    }
    //to get the cart item count on the cart icon bubble on top
    const getCartCount=()=>{
        let totalItem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue= {all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getCartCount};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
