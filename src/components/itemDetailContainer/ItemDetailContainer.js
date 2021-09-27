import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router';

function ItemDetailContainer(){
    const [productos, setProductos] = useState([]);
    // const [itemDetail, setItemDetail] = useState([]);
    const [cargando, setCargando] = useState(false);
    const {categoryId} = useParams();
    
    // console.log(categoryId);
    useEffect(() => {
        
        setCargando(true);
        const link = `http://localhost:3001/productos/`;
        setTimeout(()=>{
            fetch(link)
            .then(response =>response.json())
            .then((data) =>{
                if(categoryId !== undefined){
                    setProductos(data.filter(producto => producto.categoria === categoryId));
                }else{
                    setProductos(data);
                }
            } )
            .finally(()=> {
                setCargando(false)
            });
        }, 400)
    }, [categoryId]);
    // console.log(productos)  POR QUE SE MUESTRA 2 VECES??
  
    // console.log(productos, 'xd')
    // function verDetalle(producto){
        // console.log(producto);
    //     setItemDetail(producto);
    // }
    return(
    <>
        <h2>Productos</h2>
        {(cargando) && <p className='cargando'>Cargando listado de productos.</p>}
        <ul className='listado'>
            {productos?.map((producto) =>{
                return (
                    <div key={producto.id} className='listado__productos'>
                        <li className='listado__title'>{producto.nombre}</li>
                        <li>
                            <Link to={`/products/${producto.id}`}>
                                <img className='listado__img' src={producto.srcimg} alt={producto.nombre}/>
                            </Link>
                        </li>
                        <li className='listado__precio'>${producto.precio}</li>
                        {/* <button className='listado__button' onClick={()=>verDetalle(producto)}>VER DETALLES</button> */}
                        <li>
                            <Link to={`/products/${producto.id}`} className='listado__button'>
                                <span>VER MÁS DETALLES</span>
                            </Link>
                        </li>
                    </div>
                );
            })}
        </ul>
        {/* <ItemDetail 
        producto={itemDetail}
        /> */}
    </>
    );
}

export default ItemDetailContainer;