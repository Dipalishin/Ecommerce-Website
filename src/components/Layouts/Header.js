import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import FOODNEW from '../../assets/FOODNEW.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
      <img src={FOODNEW} alt='A table full of delicious Food'></img>
      </div>
    </Fragment>
  );
};

export default Header;