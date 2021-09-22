import {useEffect, useState} from 'react';
import {useParams} from 'react-router';

function ProductDetail(){
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        // console.log(id)
        fetch(`http://localhost:3001/productos/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(console.log('Error obteniendo el detalle del producto'));
    }, [id]);
    return(
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
    )
}

export default ProductDetail;