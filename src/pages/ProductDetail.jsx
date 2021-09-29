import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import CountProduct from '../components/itemCount/ItemCount.js';
import {useContext} from 'react';
import {CartContext} from '../context/CartContext.js';
import {createContext} from 'react';

function ProductDetail(){
    const [product, setProduct] = useState([]);
    const [cantProd, setCantProd] = useState(0);
    const {id} = useParams();
    const CartContext = createContext([]);
    const [cart, setCart] = useState([]);
    const addItem = (item, quantity) => {
        const newItem = {item, quantity};
        console.log(newItem);
        setCart((prevState) => prevState.push(newItem));
        console.log(cart);
    }

    useEffect(()=>{
        try{
            console.log(id);
            fetch(`http://localhost:3001/productos/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data));
        }
        catch(error){
            console.log(error.message);
        }
        // console.log(id)
        // fetch(`http://localhost:3001/product3os/${id}`)
        // .then(response => response.json())
        // .then(data => setProduct(data))
        // .catch(error=>{console.log(`Hubo un error: ${error}`)});
    }, [id]);


    return(
        <>
            {cantProd !== 0 && <p className='cargando'>Agregaste {cantProd} {product.nombre} al carrito. <Link to='/cart' className='nav__link'> Ir al carrito. </Link></p>}
            <div className='total__detalles'>
                <ul className='detalles'>
                    {
                    product.id !== parseInt(id) ? <p className='detalles__error'>No seleccionó ningún detalle para ver...</p> : 
                    <div className='detalles__producto'>
                        <li className='detalles__title'>{product?.nombre}</li>
                        <li><img className='detalles__img' src={product?.srcimg} alt={product.nombre}/></li>
                        <li className='detalles__desc'>{product?.desc}</li>
                        <li className='detalles__precio'>${product?.precio}</li>
                    </div>
                    }
                </ul>
                <CountProduct stock={8} initial={1} agregarCarrito={addItem} producto={product}/>
            </div>
        </>
    )
}

export default ProductDetail;