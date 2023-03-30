import classes from './HeaderCartButton.module.css';
import React, { useState } from 'react';
import Cart from '../Cart/Cart';
const HeaderCartButton=props=>{
    const [showCartItem,setShowCartItem]=useState(false);
    const cartItemHandler = () => {
        setShowCartItem(true);
      }
    
    return(
        <React.Fragment>
        <button className={classes.cartholder} onClick={cartItemHandler}>
            <span>Cart</span>
            <span className={classes.cartcount}>0</span>
        </button>
        {showCartItem && <Cart/>}

</React.Fragment>
    );


}
export default HeaderCartButton;