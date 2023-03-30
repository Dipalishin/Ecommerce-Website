import classes from './HeaderCartButton.module.css';
const HeaderCartButton=props=>{
    return(
        <button className={classes.cartholder}>
            <span>Cart</span>
            <span className={classes.cartcount}>0</span>
        </button>

    );


}
export default HeaderCartButton;