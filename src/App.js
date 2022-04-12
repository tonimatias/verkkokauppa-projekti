import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Yllapito from './pages/Yllapito';
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
  

/*   function addToCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }
 */
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
      /*  product['amount'] = 1;
      const newCart = [...cart,product];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart)); */
  }

  function emptyCart(){
    setCart([]);
    localStorage.removeItem('cart');
  }

  /* function order(e) {
    e.preventDefault();

    const json = JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      address: address,
      zip: zip,
      city: city,
      cart: cart,
    });
    axios.post(URL + 'order/save.php',json,{
      headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json'
      }
    })
    .then(() => {
      empty();
      setFinished(true);
    }).catch(error => {
      alert(error.response === undefined ? error : error.response.data.error)
    })
  } */

  return (
    <div id='body'>
      < Header url={URL} cart={cart}/>
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/products/:categoryId' element={<Products url={URL} addToCart={addToCart}/>}/>
            <Route path='/order' element={<Order cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} empty={emptyCart}/>}/>
          </Routes>
        </div>

      <Footer />

    </div>
  );
}

export default App;
