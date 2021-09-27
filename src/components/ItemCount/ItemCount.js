import React, {useState} from 'react';

function CountProduct({stock, initial, agregarCarrito}){
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
    return(
        <div className='contador'>
            <div className='contador__botones'>
                <button onClick={() => restar(number)} className='contador__button' type='button'><ion-icon size='large'    name="chevron-down-circle-outline"></ion-icon></button>
                <input className={(number >= stock || number === 0) ? 'contador__input invalido' : 'contador__input none'}
                type='number' value={number} onChange={()=>{}}/>
                <button onClick={() => sumar(number)} className='contador__button'  type='button'><ion-icon size='large' name="chevron-up-circle-outline"></ion-icon></button>
            </div>
            <button className='contador__add' onClick={(e) => agregarCarrito(e, number)}>AGREGAR AL CARRITO</button>
        </div>
    );
}

export default CountProduct;