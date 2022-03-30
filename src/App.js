import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ostoskori from './pages/Ostoskori';
import { Route, Routes } from 'react-router';
import Products from './pages/Products';

const URL = 'http://localhost/gaminggadgets/';

function App() {
  return (
    <div id='body'>

      < Header url={URL}/>
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/products/:categoryId' element={<Products url={URL}/>}/>
            <Route path='/ostoskori' element={<Ostoskori />}/>
          </Routes>
        </div>

      <Footer />

    </div>
  );
}

export default App;
