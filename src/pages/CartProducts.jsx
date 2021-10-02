import * as React from 'react';
import CartContext from '../context/CartContext';

function CartProducts(){
    const {productsCart} = React.useContext(CartContext);

    return (
        <div>
            <h2>Productos seleccionados</h2>
            <div className='carrito'>

            {productsCart?.map((product) => {
                    return (
                        <div className='carrito__container'>
                            <td className='carrito__fila'><img className='carrito__img' alt={product.nombre} src={product.srcimg}/></td>
                            <td className='carrito__fila'>{product.nombre}</td>
                            <td className='carrito__fila'>{product.precio}</td>
                            <td className='carrito__fila'>{product.cantidad}</td>
                            <td className='carrito__fila'>{product.cantidad * product.precio}</td>
                            <td className='carrito__fila'><button className='carrito__button'>BORRAR</button></td>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CartProducts;