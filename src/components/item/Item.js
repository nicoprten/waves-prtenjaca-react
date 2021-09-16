import {useState} from 'react';
function Item(id, nombre, precio, desc){
    const [items, setItems] = useState([]);
    const [cargando, setCargando] = useState(true);

    // const agarrarProductos = () => {
    //     return new Promise((resolve) =>{
    //         setTimeout(() =>{
    //             resolve(productos);
    //         }, 3000);
    //     });
    // };

    return(
        <>
            
            <div className='listado'>
                            <div className='item' key={id}>
                                <h2 className='item__title' >Nombre: {nombre}</h2>
                                <p className='item__precio'>Precio: {precio}</p>
                                <p>{desc}</p>
                            </div>
            </div>
                
        </>
    );
}

export default Item;