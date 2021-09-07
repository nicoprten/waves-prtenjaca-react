import './App.css';
import Navbar from './components/navbar/Navbar.js';
import ItemListContainer from './components/items/ItemListContainer.js';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer nombre='Remera Enlighted' precio={2400} src='//d3ugyf2ht6aenh.cloudfront.net/stores/121/284/products/remera_bodylaser11-822909182b47b6ddc616308900458375-1024-1024.png'/>
    </>
  );
}

export default App;
