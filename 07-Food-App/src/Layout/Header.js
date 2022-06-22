import { Fragment } from 'react';

import mealimage from '../assets/meal.jpg';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';


const Header = props =>{
   return (
   <Fragment>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div classesName={classes['main-image']}>
        <img src={mealimage} alt='Food' />
    </div>
   </Fragment>

   ); 
};

export default Header;