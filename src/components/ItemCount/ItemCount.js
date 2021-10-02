import React, {useState} from 'react';
import CartContext from '../../context/CartContext.js';

function CountProduct({stock, initial, item}){
    const [number, setNumber] = useState(initial);
    function restar(){
        if (number > 1){
            setNumber(number - 1);
        }
    }
    function sumar(){
        if (number < stock){
            setNumber(number + 1);
        }
    }

    const {addItem} = React.useContext(CartContext);
    return(
        <div className='contador'>
            <div className='contador__botones'>
                <button onClick={() => restar(number)} className='contador__button' type='button'><ion-icon size='large'    name="chevron-down-circle-outline"></ion-icon></button>
                <input className={(number >= stock || number === 0) ? 'contador__input invalido' : 'contador__input none'}
                type='number' value={number} onChange={()=>{}}/>
                <button onClick={() => sumar(number)} className='contador__button'  type='button'><ion-icon size='large' name="chevron-up-circle-outline"></ion-icon></button>
            </div>
            <button className='contador__add' onClick={(e) => addItem(item, number)}>AGREGAR AL CARRITO</button>
        </div>
    );
}

export default CountProduct;