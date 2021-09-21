import React, {useState} from 'react';
import './css/style.scss';
function CountProduct({stock, initial}){
    const [number, setNumber] = useState(initial);
    function restar(){
        if (number >= 1){
            setNumber(number - 1);
        }
    }
    function sumar(){
        if (number < stock){
            setNumber(number + 1);
        }
    }
    function addProduct(){
        console.log('Agregando producto...');
    }
    return(
        <div className='contador'>
            <div className='contador__botones'>
                <button onClick={() => restar(number)} className='contador__button' type='button'><ion-icon size='large'    name="chevron-down-circle-outline"></ion-icon></button>
                <input className={(number >= stock || number === 0) ? 'contador__input invalido' : 'contador__input none'}
                type='number' value={number} onChange={()=>{}}/>
                <button onClick={() => sumar(number)} className='contador__button'  type='button'><ion-icon size='large' name="chevron-up-circle-outline"></ion-icon></button>
            </div>
            <button className='contador__add' onClick={() => addProduct()}>AGREGAR AL CARRITO</button>
        </div>
    );
}

export default CountProduct;