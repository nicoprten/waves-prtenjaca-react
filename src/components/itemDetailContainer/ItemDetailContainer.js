import {useEffect, useState} from 'react';
import ItemDetail from '../itemDetail/ItemDetail.js';

function ItemDetailContainer(){
    const [productos, setProductos] = useState([]);
    const [itemDetail, setItemDetail] = useState([]);
    useEffect(() => {
        const link = 'http://localhost:3001/products';
        setTimeout(()=>{
            fetch(link)
            .then(response =>response.json())
            .then(data => setProductos(data));
        }, 2000)
    }, []);
    // console.log(productos, 'xd')
    function verDetalle(producto){
        // console.log(producto);
        setItemDetail(producto);
    }
    
    return(
    <>
        <h2>Productos detallados</h2>
        <ul className='listado'>
            {productos?.map((producto) =>{
                return (
                    <div key={producto.id} className='listado__productos'>
                        <li className='listado__title'>{producto.nombre}</li>
                        <li ><img className='listado__img' src={producto.srcimg} alt={producto.nombre}/></li>
                        <li className='listado__precio'>${producto.precio}</li>
                        <button className='listado__button' onClick={()=>verDetalle(producto)}>VER DETALLES</button>
                    </div>
                );
            })}
        </ul>
        <ItemDetail 
        producto={itemDetail}
        />
    </>
    );
}

export default ItemDetailContainer;