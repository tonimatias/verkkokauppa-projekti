import React from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"


export default function Home({ url, addToCart }) {

    const [products, setProducts] = useState([]);

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

    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        axios.get(url + 'products/getpopularproducts.php/')
            .then((response) => {
                const json = response.data;
                setPopularProducts(json.products)
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }, [params])


    return (
        <section id='content'>
            <h3 className="heading">Tarjoustuotteet</h3>
            <div id="discountProducts">
                {products.map(product => (
                    <div key={product.id}>
                        <div className="card" style={{ width: 20 + 'rem', height: 24 + 'rem' }}>
                            <img src={url + 'images/' + product.image} className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <div id="cardBottom">
                                    <span id='hinta'>{product.price.toFixed(2)}</span>
                                    <span id='vanhaHinta'>{product.old_price}</span>
                                    <Button id="addToCart" onClick={e => addToCart(product)} variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='productImg' /></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h3 className="heading">Suosituimmat</h3>
            <div id="discountProducts">
                {popularProducts.map(product => (
                    <div key={product.id}>
                        <div className="card" style={{ width: 20 + 'rem', height: 24 + 'rem' }}>
                            <img src={url + 'images/' + product.image} className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <div id="cardBottom">
                                    <span id='hinta'>{product.price.toFixed(2)}</span>
                                    <span id='vanhaHinta'>{product.old_price}</span>
                                    <Button id="addToCart" onClick={e => addToCart(product)} variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='productImg' /></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}