import * as React from 'react';
import CartContext from '../context/CartContext';
import {Link} from 'react-router-dom';

function CartProducts(){
    const {productsCart, clear, removeItem, precioTotal, enviarPrecioTotal} = React.useContext(CartContext);
    
    React.useEffect(() =>{
        enviarPrecioTotal();
    }, [productsCart])

    return (
        <div>
            <h2>Productos seleccionados</h2>
            <div className='carrito'>
            {productsCart?.map((product) => {
                    return (
                        <ul key={product.id} className='carrito__container'>
                            <li className='carrito__fila'><img className='carrito__img' alt={product.nombre} src={product.srcimg}/></li>
                            <li className='carrito__fila'>{product.nombre}</li>
                            <li className='carrito__fila'>{product.precio}</li>
                            <li className='carrito__fila'>{product.cantidad}</li>
                            <li className='carrito__fila'>{product.cantidad * product.precio}</li>
                            <li className='carrito__fila'><button className='carrito__button' onClick={()=>removeItem(product.id)}>BORRAR</button></li>
                        </ul>
                    )
                })}
                <>
                    { productsCart.length !== 0 ? 
                        <>
                            <p className='precio__total'>PRECIO TOTAL: ${precioTotal}</p>
                            <div className='carrito__buttons'>
                                <button className='button__clear' onClick={()=>clear()}>VACIAR CARRITO</button>
                                <Link to ='/formcompra'>
                                    <button className='button__clear'>FINALIZAR COMPRA</button>
                                </Link>
                            </div>
                        </> :
                        <Link to ='/products' className='error__link'>
                            Volver al listado de productos
                        </Link>
                    }
                </>
            </div>
        </div>
    )
}

export default CartProducts;