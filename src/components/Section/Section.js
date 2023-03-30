import classes from "./Section.module.css";
import MusicAlbums from '../MusicAlbums/MusicAlbum';
import Cart from "../Cart/Cart";
import { useState } from "react";

const Section=props=>{
    const [showCartItem,setShowCartItem]=useState(false);
    const cartItemHandler=()=>{
        setShowCartItem(true);
    }

    return(
        <section className={classes.section}>
      <h1>The Generics</h1>
      <MusicAlbums productList={props.productList} />

     <button className={classes.button} onClick={cartItemHandler}>See the cart</button>
     {showCartItem && <Cart/>}
    </section>
 
    );
}
export default Section;