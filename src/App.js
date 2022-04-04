import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ostoskori from './pages/Ostoskori';
import { Route, Routes } from 'react-router';
import Products from './pages/Products';
import {useState, useEffect} from 'react';

const URL = 'http://localhost/gaming_gadgets_backend/';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])
  

  function addToCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }

  return (
    <div id='body'>
      < Header url={URL} cart={cart}/>
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/products/:categoryId' element={<Products url={URL} addToCart={addToCart}/>}/>
            <Route path='/ostoskori' element={<Ostoskori />}/>
          </Routes>
        </div>

      <Footer />

    </div>
  );
}

export default App;
