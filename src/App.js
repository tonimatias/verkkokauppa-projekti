import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hiiret from './pages/Hiiret';
import Hiirimatot from './pages/Hiirimatot';
import Kuulokkeet from './pages/Kuulokkeet';
import Nappaimistot from './pages/Nappaimistot';
import Ostoskori from './pages/Ostoskori';
import { Route, Routes } from 'react-router';



function App() {
  return (
    <div id='body'>

      < Header />
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/hiiret' element={<Hiiret />}/>
            <Route path='/hiirimatot' element={<Hiirimatot />}/>
            <Route path='/kuulokkeet' element={<Kuulokkeet />}/>
            <Route path='/nappaimistot' element={<Nappaimistot />}/>
            <Route path='/ostoskori' element={<Ostoskori />}/>
          </Routes>
        </div>

      <Footer />

    </div>
  );
}

export default App;
