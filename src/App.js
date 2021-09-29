import './App.css';
import './css/style.scss';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Products from './pages/Products.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import {CartContext} from './context/CartContext.js';
import {useState} from 'react';

function App() {
  const [products, setProducts] = useState([]);

  return (
    <CartContext.Provider value={products}>
      <BrowserRouter>
        <Navbar />
        <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/products' component={Products}/>
              <Route exact path='/products/:id' component={ProductDetail}/>
              <Route exact path='/category' component={Products}/>
              <Route exact path='/category/:categoryId' component={Products}/>
              <Route path='*' component={NotFound}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
