import * as React from 'react';
import CartContext from '../context/CartContext';

function CartProducts(){
    const {productsCart, clear, removeItem} = React.useContext(CartContext);

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
                            <td className='carrito__fila'><button className='carrito__button' onClick={()=>removeItem(product.id)}>BORRAR</button></td>
                        </div>
                    )
                })}
                { productsCart.length !== 0 && <button className='button__clear' onClick={()=>clear()}>BORRAR</button>}
            </div>
        </div>
    )
}

export default CartProducts;