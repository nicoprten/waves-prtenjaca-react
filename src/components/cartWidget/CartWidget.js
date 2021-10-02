import './cartWidget.css'
import { Link } from 'react-router-dom';
import * as React from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () =>{
    const {productsCart} = React.useContext(CartContext);
    return(
        <>
            <Link to='/cart' className='nav__link'> 
                <span className='nav__icon__carrito'>Carrito</span> 
                <span>{productsCart.length}</span>
            </Link>

        </>
    );
}
export default CartWidget;