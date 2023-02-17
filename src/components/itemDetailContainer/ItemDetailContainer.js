import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router';
import { db } from './../../firebase/index';
import { collection, query, where, getDocs } from "firebase/firestore";

function ItemDetailContainer(){
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const {categoryId} = useParams();
    // console.log(categoryId)
    const callProducts = async function(category){
        let q;
        if(category){
            q = query(collection(db, "productos"), where("categoria", "==", category));
        }else{
            q = collection(db, "productos");
        }
        const querySnapshot = await getDocs(q);
        let productosView = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            productosView.push({...doc.data(), id: doc.id});
        });
        setProductos(productosView)
        setCargando(false);
    }
    useEffect(() => {
        callProducts(categoryId);
    }, [categoryId]);
    return(
    <>
        <h2>Productos</h2>
        {(cargando) && <p className='cargando'>Cargando listado de productos.</p>}
        <ul className='listado'>
            {productos?.map((producto) =>{
                // {console.log(producto)}
                return (
                    <div key={producto.id} className='listado__productos'>
                        {console.log(producto)}
                        <li>
                            <Link to={`/products/${producto.id}`}>
                                <img className='listado__img' src={producto.srcimg} alt={producto.nombre}/>
                            </Link>
                        </li>
                        <div className='listado__inf'>
                            <li className='listado__title'>{producto.nombre.toUpperCase()}</li>
                            <li className='listado__precio'>${producto.precio}</li>
                            <li>
                                <Link to={`/products/${producto.id}`} className='listado__button'>
                                    <span>AGREGAR AL CARRITO</span>
                                </Link>
                            </li>
                        </div>
                    </div>
                );
            })}
        </ul>
    </>
    );
}

export default ItemDetailContainer;