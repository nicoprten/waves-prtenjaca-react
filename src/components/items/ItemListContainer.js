import './item.css'
import CountProduct from '../ItemCount/ItemCount.js';
import ItemList from '../itemList/ItemList.js';
function ItemListContainer({nombre, precio, src}){
    return(
        // <div className='item'>
        //     <h2 className='item__title'>{nombre}</h2>
        //     <p className='item__precio'>Precio: {precio}</p>
        //     <img className='item__img' src={src} alt='producto 01'/>
        //     <CountProduct stock={10} initial={1}/>
        // </div>
        <ItemList/>
    );
}
export default ItemListContainer;