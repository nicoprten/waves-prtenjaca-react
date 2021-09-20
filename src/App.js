import './App.css';
import Navbar from './components/navbar/Navbar.js';
import ItemListContainer from './components/items/ItemListContainer.js';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.js';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  );
}

export default App;
