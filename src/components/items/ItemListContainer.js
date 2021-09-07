import './item.css'
function ItemListContainer({nombre, precio, src}){
    return(
        <div className='item'>
            <h2 className='item__title'>{nombre}</h2>
            <p className='item__precio'>Precio: {precio}</p>
            <img className='item__img' src={src}/>
        </div>
    );
}
export default ItemListContainer;