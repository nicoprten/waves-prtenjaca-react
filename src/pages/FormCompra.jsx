import * as React from 'react';
import CartContext from '../context/CartContext';
import {Link} from 'react-router-dom';

function FormCompra (){
    const {enviarDatosUser} = React.useContext(CartContext);
    return(
        <div>
            <h2>Formulario de compra</h2>
            <form className='formcompra'>
                <input id='nombre' className='formcompra__input' type='text' name='nombre' placeholder='Ingrese su nombre'/>
                <input id='mail' className='formcompra__input' type='mail' name='mail' placeholder='Ingrese su mail'/>
                <input id='cel' className='formcompra__input' type='number' name='cel' placeholder='Ingrese su celular'/>
                <Link to='/resumenCompra'>
                    <button className='formcompra__input button__add' onClick={()=>{enviarDatosUser()}}>FINALIZAR COMPRA</button>
                </Link>
            </form>
        </div>
    )
}

export default FormCompra;