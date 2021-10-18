import * as React from 'react';
import CartContext from '../context/CartContext';
import {Link} from 'react-router-dom';

function FormCompra (){
    const {enviarDatosUser} = React.useContext(CartContext);
    return(
        <div>
            <h2>Formulario de compra</h2>
            <form className='formcompra'>
                <input id='nombre' className='formcompra__input' type='text' name='nombre' placeholder='Ingrese su nombre'></input>
                <input id='apellido' className='formcompra__input' type='text' name='apellido' placeholder='Ingrese su apellido'></input>
                <input id='mail' className='formcompra__input' type='mail' name='mail' placeholder='Ingrese su mail'></input>
                <input id='postal' className='formcompra__input' type='number' name='postal' placeholder='Ingrese su código postal'></input>
                <Link to='/resumenCompra'>
                    <input className='formcompra__input button__add' onClick={()=>{enviarDatosUser()}} value='FINALIZAR COMPRA'></input>
                </Link>
            </form>
        </div>
    )
}

export default FormCompra;