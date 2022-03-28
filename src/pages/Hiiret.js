import React from "react";
import '../App.css';
import Kategoriat from '../components/Kategoriat';
import Button from 'react-bootstrap/Button';

export default function Hiiret() {
    return (
        <div id='content'>
            < Kategoriat />
            <h1>Hiiret</h1>
            <div class="card-group">
     <div class="card">
    <img src="../Hiiri.jpg" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Hiiri</h5>
      <p class="card-text">Halpa ja huono hiiri, älä osta tätä.</p>
      <div id='hinta'> 4,95</div>
      <Button variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='hiiri1'></img></Button>
      
    </div>
  </div>
  <div class="card">
    <img src="../Hiiri.jpg" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Hiiri 2</h5>
      <p class="card-text">Vähän parempi hiiri.</p>
      <div id='hinta'> 6,95</div>
      <Button variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='hiiri1'></img></Button>
    </div>
  </div>
  <div class="card">
    <img src="../Hiiri.jpg" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Hiiri 3</h5>
      <p class="card-text">Ihan semi-hyvä hiiri</p>
      <div id='hinta'> 14,95</div>
      <Button variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='hiiri1'></img></Button>
    </div>
  </div>
</div>
<div class="card-group">
     <div class="card">
    <img src="../Hiiri.jpg" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Hiiri</h5>
      <p class="card-text">Halpa ja huono hiiri, älä osta tätä.</p>
      <div id='hinta'> 4,95</div>
      <Button variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='hiiri1'></img></Button>
      
    </div>
  </div>
  <div class="card">
    <img src="../Hiiri.jpg" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Hiiri 2</h5>
      <p class="card-text">Vähän parempi hiiri.</p>
      <div id='hinta'> 6,95</div>
      <Button variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='hiiri1'></img></Button>
    </div>
  </div>
  <div class="card">
    <img src="../Hiiri.jpg" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Hiiri 3</h5>
      <p class="card-text">Ihan semi-hyvä hiiri</p>
      <div id='hinta'> 14,95</div>
      <Button variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='hiiri1'></img></Button>
    </div>
  </div>
</div>
<div class="card-group">
     <div class="card">
    <img src="../Hiiri.jpg" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Hiiri</h5>
      <p class="card-text">Halpa ja huono hiiri, älä osta tätä.</p>
      <div id='hinta'> 4,95</div>
      <Button variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='hiiri1'></img></Button>
      
    </div>
  </div>
  <div class="card">
    <img src="../Hiiri.jpg" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Hiiri 2</h5>
      <p class="card-text">Vähän parempi hiiri.</p>
      <div id='hinta'> 6,95</div>
      <Button variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='hiiri1'></img></Button>
    </div>
  </div>
  <div class="card">
    <img src="../Hiiri.jpg" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Hiiri 3</h5>
      <p class="card-text">Ihan semi-hyvä hiiri</p>
      <div id='hinta'> 14,95</div>
      <Button variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='hiiri1'></img></Button>
    </div>
  </div>
</div>
        </div>
    );
}