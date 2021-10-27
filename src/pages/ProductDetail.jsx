import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import CountProduct from '../components/itemCount/ItemCount.js';
import {getFirestore} from '../firebase/index.js';

function ProductDetail(){
    const [product, setProduct] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        try{
            const db = getFirestore();
            const productosCollection = db.collection('productos');
            const producto = productosCollection.doc(id);
            producto.get()
            .then((doc) => {
                if(!doc.exists){
                    console.log('No existe el producto seleccionado');
                }else{
                    setProduct(({id: doc.id, ...doc.data()}));
                }
            })
            .catch(err => console.log(err))
            .finally(()=> {})

        }
        catch(error){
            console.log(error.message);
        }
    }, [id]);


    return(
        <>
            <div className='total__detalles'>
                <ul className='detalles'>
                    {
                    product.id !== id ? <p className='detalles__error'>No seleccionó ningún detalle para ver...</p> : 
                    <div className='detalles__producto'>
                        <li className='detalles__title'>{product?.nombre.toUpperCase()}</li>
                        <li><img className='detalles__img' src={product?.srcimg} alt={product.nombre}/></li>
                        <li className='detalles__desc'>{product?.desc}</li>
                        <li className='detalles__precio'>${product?.precio}</li>
                        <li><CountProduct stock={8} initial={1} item={product}/></li>
                    </div>
                    }
                </ul>
            </div>
        </>
    )
}

export default ProductDetail;