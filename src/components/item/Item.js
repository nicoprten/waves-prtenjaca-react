import {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount.js'

function Item(producto){
    const [items, setItems] = useState([]);
    const [cargando, setCargando] = useState(false);
    console.log(producto);
    useEffect(() =>{
        setCargando(true);
        agarrarProductos().then((result) =>{
            setItems(
                <div className='item' key={result.id}>
                    <h2 className='item__title' >{result.nombre}</h2>
                    <p className='item__precio'>${result.precio}</p>
                    <img className='item__img' src={result.srcimg} alt={result.desc}/>
                    <ItemCount />
                </div>
            );
            
        })
        .finally(() =>{
            setCargando(false);
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
            {/* <h3>{cargando ? 'Cargando item' : ''}</h3>
            <div className='item' key={items.id}>
                <h2 className='item__title' >{items.nombre}</h2>
                <p className='item__precio'>{items.precio}</p>
                <p>{items.desc}</p>
            </div> */}
            
                {items}
        </>
    );
}

export default Item;