import {useState, useEffect} from 'react';
function Item(producto){
    const [items, setItems] = useState([]);
    const [cargando, setCargando] = useState(true);
    console.log(producto);
    useEffect(() =>{
        agarrarProductos().then((result) =>{
            setItems(result);
        });
    }, [])
    const agarrarProductos = () => {
        return new Promise((resolve) =>{
            setTimeout(() =>{
                resolve(producto);
            }, 2000);
        });
    };
    const agarrarProductosAsync = async () => {
        const productos = await agarrarProductos();
        // console.log(productos);
    }
    agarrarProductosAsync();
    return(
        <>
            <div className='item' key={items.id}>
                <h2 className='item__title' >{items.nombre}</h2>
                <p className='item__precio'>${items.precio}</p>
                <p>{items.desc}</p>
            </div>
                
        </>
    );
}

export default Item;