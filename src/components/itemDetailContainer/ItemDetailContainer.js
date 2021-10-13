import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router';
import {getFirestore} from '../../firebase/index.js';

function ItemDetailContainer(){
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const {categoryId} = useParams();

    useEffect(() => {
        setCargando(true);
        // const link = `http://localhost:3001/productos/`;
        // setTimeout(()=>{
        //     fetch(link)
        //     .then(response =>response.json())
        //     .then((data) =>{
        //         if(categoryId !== undefined){
        //             setProductos(data.filter(producto => producto.categoria === categoryId));
        //         }else{
        //             setProductos(data);
        //         }
        //     } )
        //     .finally(()=> {
        //         setCargando(false)
        //     });
        // }, 400)

        const db = getFirestore();
        const productosCollection = db.collection('productos');
        productosCollection.get()
        .then((querySnapshot)=>{
            if(querySnapshot.empty){
                console.log('No hay productos');
            }else{
                if(categoryId !== undefined){
                    const productosFiltrados = querySnapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})).filter(producto => producto.categoria === categoryId);
                    setProductos(productosFiltrados);
                }else{
                    setProductos(querySnapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})));
                }
            }
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{setCargando(false)});

    }, [categoryId]);
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
                        <li>
                            <Link to={`/products/${producto.id}`} className='listado__button'>
                                <span>VER MÁS DETALLES</span>
                            </Link>
                        </li>
                    </div>
                );
            })}
        </ul>
    </>
    );
}

export default ItemDetailContainer;