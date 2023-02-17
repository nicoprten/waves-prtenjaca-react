import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
// import CountProduct from './../components/itemCount/ItemCount.js';
import CountProduct from './../components/ItemCount/ItemCount';
import { db } from '../firebase/index.js';
import { getDoc, doc, setDoc } from "firebase/firestore"; 

function ProductDetail(){
    const [product, setProduct] = useState({});
    const {id} = useParams();
    // console.log(id)

    async function getProduct(id){
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setProduct(docSnap.data());
            console.log(product)
        }else{
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    useEffect(()=>{
        getProduct(id);
        // try{
        //     const productosCollection = collection(db, 'productos');
        //     const producto = productosCollection.doc(id);
        //     console.log(producto)
        //     // producto.get()
        //     .then((doc) => {
        //         if(!doc.exists){
        //             console.log('No existe el producto seleccionado');
        //         }else{
        //             setProduct(({id: doc.id, ...doc.data()}));
        //         }
        //     })
        //     .catch(err => console.log(err))
        //     .finally(()=> {})

        // }
        // catch(error){
        //     console.log(error.message);
        // }
    }, [id]);


    return(
        <>
            <div className='total__detalles'>
                <ul className='detalles'>
                    {
                    Object.keys(product).length > 0  ? 
                        <div className='detalles__producto'>
                            <li className='detalles__title'>{product?.nombre.toUpperCase()}</li>
                            <li><img className='detalles__img' src={product?.srcimg} alt={product.nombre}/></li>
                            <li className='detalles__desc'>{product?.desc}</li>
                            <li className='detalles__precio'>${product?.precio}</li>
                            <li><CountProduct stock={8} initial={1} item={product}/></li>
                        </div>
                    : 
                        <p className='detalles__error'>No seleccionó ningún detalle para ver...</p>
                    }
                </ul>
            </div>
        </>
    )
}

export default ProductDetail;