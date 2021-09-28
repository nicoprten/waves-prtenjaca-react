import './cartWidget.css'
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext.js';

const CartWidget = () =>{
    const themeColor = useContext(CartContext);

    return(
        <>
            <Link to='/cart' className='nav__link'> <span className='nav__icon__carrito'>Carrito</span> </Link>
            <span>themeColor: {themeColor}</span>
        </>
    );
}
export default CartWidget;