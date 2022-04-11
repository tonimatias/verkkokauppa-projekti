import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function Home({url,addToCart}) {

    //export default function Products({url,addToCart}) {

        //const [categoryName, setCategoryName] = useState('');
       /* const [products, setProducts] = useState([]);
    
        let params = useParams();
    
        useEffect(() => {
            axios.get(url + 'products/getdiscountproducts.php/')
            .then((response) => {
                const json = response.data;
                setProducts(json.products)
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
        }, [params])
*/
    return (
        <section id='content'>
            
            <h3>Tarjoukset</h3>

            <Carousel id='carousel' variant='dark'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../hiiri.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Hiiri 1</h3>
                        <p>iha saatanan leveä hiiri</p>
                        <div id='hinta'><span id='vanha-hinta'>5,95</span> 4,95</div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50"
                        src="../hiiri.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>hiiri2</h3>
                        <p>sdfsdgjsdf</p>
                        <div id='hinta'><span id='vanha-hinta'>5,95</span> 4,95</div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50"
                        src="../keyboard1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Näppäimistö</h3>
                        <p>edfghds</p>
                        <div id='hinta'><span id='vanha-hinta'>139,95</span> 119,95</div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div><h3>Suosituimmat tuotteet</h3></div>
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
    <img src="../keyboard1.jpg" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Näppäimistö</h5>
      <p class="card-text">Ihan semi-hyvä näppäimistö</p>
      <div id='hinta'> 74,95</div>
      <Button variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='hiiri1'></img></Button>
    </div>
  </div>
</div>
        </section>
    );
}