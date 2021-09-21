import './App.css';
import './css/style.scss';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import {Switch, BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/productdetail' component={ProductDetail}/>
            <Route path='*' component={NotFound}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
