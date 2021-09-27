// import {useState, useEffect} from 'react';
import CountProduct from '../itemCount/ItemCount.js';

function ItemDetail(detalle){
    // console.log(detalle);
    // console.log(detalle.producto);
    return( 
        <>
            <ul className='detalles'>
                {
                detalle.producto.length === 0 ? <p>No seleccionó ningún detalle para ver...</p> : 
                <div className='detalles__producto'>
                    <li className='detalles__title'>{detalle.producto.nombre}</li>
                    <li><img className='detalles__img' src={detalle.producto.srcimg} alt={detalle.producto.nombre}/></li>
                    <li className='detalles__desc'>{detalle.producto.desc}</li>
                    <li className='detalles__precio'>${detalle.producto.precio}</li>
                </div>
                }
            </ul>
            <div>
                <CountProduct />
            </div>
        </>
    );
}

export default ItemDetail;