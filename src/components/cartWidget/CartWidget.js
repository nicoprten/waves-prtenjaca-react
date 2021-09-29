import './cartWidget.css'
import { Link } from 'react-router-dom';

const CartWidget = () =>{

    return(
        <>
            <Link to='/cart' className='nav__link'> <span className='nav__icon__carrito'>Carrito</span> </Link>
        </>
    );
}
export default CartWidget;