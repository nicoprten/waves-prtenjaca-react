import './App.css';
import './css/style.scss';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Products from './pages/Products.jsx';
import Home from './pages/Home.jsx';
import CartProducts from './pages/CartProducts.jsx';
import FormCompra from './pages/FormCompra.jsx';
import ResumenCompra from './pages/ResumenCompra.jsx';
import NotFound from './pages/NotFound.jsx';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import {CartProvider} from './context/CartContext.js';
// import {useEffect} from 'react';
// import {getFirestore} from './firebase';

function App() {

  // useEffect(() => {
  //   const productos = [
  //     {"nombre": "Remera Enlighted", "precio": 2400, "srcimg" : "//d3ugyf2ht6aenh.cloudfront.net/stores/121/284/products/remera_fallbody11-8045da76c1026d10ff16308897720520-1024-1024.png", "desc": "Remera muy fachera limitada.", "categoria": "remeras"
  //     }, 
  //     {"nombre": "Pantalon Cargo", "precio": 1600, "srcimg" : "//d3ugyf2ht6aenh.cloudfront.net/stores/121/284/products/pantalon_ai_bordado111-840ae6036c78d37aa716263754206574-1024-1024.png", "desc": "Muy comodos para salir a correr.", "categoria": "pantalones"
  //     }, 
  //     {"nombre": "Gorro de lana Enlighted", "precio": 1300, "srcimg" : "//d3ugyf2ht6aenh.cloudfront.net/stores/121/284/products/beanie-logo21-2a1cf6b7a8e808eb9416276009088444-1024-1024.png", "desc": "Preparate para el frio con el mejor gorro.", "categoria": "abrigos"
  //     },
  //     {"nombre": "Remera Limited", "precio": 2200, "srcimg": "//d3ugyf2ht6aenh.cloudfront.net/stores/121/284/products/remera_hands11-a45719cdac4674aa9c16308894368618-1024-1024.png", "desc": "Remera limitada 100% algodon", "categoria": "remeras"
  //     },
  //     {"nombre": "Remera Roja", "precio": 1700, "srcimg": "//d3ugyf2ht6aenh.cloudfront.net/stores/121/284/products/remera_bodylaser11-822909182b47b6ddc616308900458375-480-0.png", "desc": "Remera estampa roja, new design.", "categoria": "remeras"
  //     },
  //     {"nombre": "Buzo canguro E-Rojo", "precio": 2700, "srcimg": "//d3ugyf2ht6aenh.cloudfront.net/stores/121/284/products/buzo_bodylaser11-b5dedcc696bb4ed32816308923210865-480-0.png", "desc": "Abrigadisimo para los dias de frío.", "categoria": "abrigos"
  //     },
  //     {"nombre": "Pantalon de vestir L-3", "precio": 2000, "srcimg": "//d3ugyf2ht6aenh.cloudfront.net/stores/121/284/products/jean_negro11-d1854778103d37105716137391738325-480-0.png", "desc": "Pantalon de vestir ultima moda", "categoria": "pantalones"
  //     }
  // ];
  // const db = getFirestore();
  // const productosCollection = db.collection('productos');
  // productos.forEach((producto) => {
  //   productosCollection.add(producto)
  //   .then((docRef) => console.log('producto agregado: ', docRef.id))
  //   .catch((err) => console.log(err));
  // })
  // }, [])
  
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/products' component={Products}/>
              <Route exact path='/products/:id' component={ProductDetail}/>
              <Route exact path='/category' component={Products}/>
              <Route exact path='/category/:categoryId' component={Products}/>
              <Route exact path='/cart' component={CartProducts}/>
              <Route exact path='/formcompra' component={FormCompra}/>
              <Route exact path='/resumencompra' component={ResumenCompra}/>
              <Route path='*' component={NotFound}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
