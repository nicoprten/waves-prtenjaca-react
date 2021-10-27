import { Link } from 'react-router-dom';
import * as React from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () =>{
    const {productsCart} = React.useContext(CartContext);
    const [totalCant, setTotalCant] = React.useState(0);
    
    React.useEffect(() =>{
        const cantidades = productsCart.map(product => product.cantidad);
        const totalCantidades = cantidades.reduce((prevCant, currentCant)=>prevCant + currentCant, 0);
        setTotalCant(totalCantidades);
    }, [productsCart]);
    return(
        <>
            <Link to='/cart' className='nav__link'> 
                <div className='icon__carrito__container'>
                    <span className='nav__icon__carrito'>Carrito</span> 
                    {totalCant !== 0 && <span className='nav__icon__cant'>{totalCant}</span>}
                </div>
            </Link>

        </>
    );
}
export default CartWidget;