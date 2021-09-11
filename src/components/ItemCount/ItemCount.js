import React, {Component, useState} from 'react';
import './countProduct.css';
function CountProduct({stock, initial}){
    const [number, setNumber] = useState(initial);
    const [clase, setClass] = useState('contador__input none');
    function restar(){
        if (number > 1){
            setNumber(number - 1);
            setClass('contador__input none');
        }else{
            setClass('contador__input invalido');
        }
    }
    function sumar(){
        if (number < stock){
            setNumber(number + 1);
            setClass('contador__input none');
        }else{
            setClass('contador__input invalido');
        }
    }
    function addProduct(){
        console.log('Agregando producto...');
    }
    return(
        <div className='contador'>
            <div className='contador__botones'>
                <button onClick={() => restar(number)} className='contador__button' type='button'><ion-icon size='large'    name="chevron-down-circle-outline"></ion-icon></button>
                <input className='contador__input' className= {clase} type='number' value={number}/>
                <button onClick={() => sumar(number)} className='contador__button'  type='button'><ion-icon size='large' name="chevron-up-circle-outline"></ion-icon></button>
            </div>
            <button className='contador__add' onClick={() => addProduct()}>AGREGAR AL CARRITO</button>
        </div>
    );
}

export default CountProduct;