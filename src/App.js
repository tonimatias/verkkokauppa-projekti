import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ManageCategories from './pages/ManageCategories'
import ManageProducts from './pages/ManageProducts'
import EditProducts from './pages/EditProducts'
import Order from './pages/Order';
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
  
  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  function updateAmount(amount, product){
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart],{[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
  }

  function addToCart(product){
    if (cart.some(item => item.id === product.id)) {
      const existingProduct = cart.filter(item => item.id === product.id);
      updateAmount(parseInt(existingProduct[0].amount) + 1,product);
    } else {
      product['amount'] = 1;
      const newCart = [...cart,product];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
    }

  }

  function emptyCart(){
    setCart([]);
    localStorage.removeItem('cart');
  }

  return (
    <div id='body'>
      < Header url={URL} cart={cart}/>
        <div>
          <Routes>
            <Route path='/' element={<Home url={URL} addToCart={addToCart}/>}/>
            <Route path='/products/:categoryId' element={<Products url={URL} addToCart={addToCart}/>}/>
            <Route path='/search/:searchPhrase' element={<Products url={URL}/>}/>
            <Route path='/order' element={<Order cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} empty={emptyCart}url={URL}/>}/>
            <Route path='/managecategories' element={<ManageCategories url={URL} addToCart={addToCart}/>}/>
            <Route path='/manageproducts' element={<ManageProducts url={URL} addToCart={addToCart}/>}/>
            <Route path='/editproducts' element={<EditProducts url={URL} addToCart={addToCart}/>}/>
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
