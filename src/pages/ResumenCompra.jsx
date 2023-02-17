import * as React from 'react';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';
import { db } from '../firebase/index.js';
import { collection, addDoc } from "firebase/firestore"; 

function ResumenCompra(){
    const {productsCart, user, precioTotal, clear} = React.useContext(CartContext);
    const [id, setId] = React.useState('');
    
    React.useEffect(() => {
        const newOrden = {productsCart, user, precioTotal};
        console.log(newOrden);
        const orderCollection = collection(db, 'orden');
        console.log(orderCollection)
        const docRef = addDoc(collection(db, "orden"), {
            ...newOrden
        });
        console.log(docRef.id)
        // setId(docRef.id)
        clear();
        // orderCollection
        // .add(newOrden)
        // .then((docRef) =>setId(docRef.id))
        // .catch((err) =>console.log(err));
    }, [])
    return(
        user ? 
        <div className='detalle'>
            <h2 className='detalle__title'>DETALLE DE SU COMPRA</h2>
            <ul className='detalle__lista'>
                <li className='detalle__item'>Nombre: {user.nombre} {user.apellido}</li>
                <li className='detalle__item'>Mail: {user.mail}</li>
                <li className='detalle__item'>Costo total: {precioTotal}</li>
            </ul>
            {productsCart.length > 0 && <h2 className='detalle__title'>PRODUCTOS COMPRADOS</h2>}
            <ul className='detalle__lista'>
                {productsCart?.map((producto)=>{
                    return <li key={producto.id} className='detalle__item'>{producto.nombre} - {producto.cantidad}u</li>
                })}
                {/* <li className='detalle__item'>ID COMPRA: {id}</li> */}
            </ul>
            <Link to ='/products' className='error__link'>
                Volver al listado de productos
            </Link>
        </div>
        :
        <div className='detalle'>
            <h2 className='detalle__title'>Debe ingresar sus datos</h2>
            <Link to ='/formCompra' className='error__link'>
                    Volver al formulario
            </Link>
        </div>

    )
}

export default ResumenCompra;