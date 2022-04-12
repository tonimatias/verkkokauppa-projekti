import React from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function Home({url,addToCart}) {

    //export default function Products({url,addToCart}) {

       //const [categoryName, setCategoryName] = useState('');
       const [products, setProducts] = useState([]);
    
        let params = useParams();
    
        useEffect(() => {
            axios.get(url + 'products/getdiscountproducts.php/')
            .then((response) => {
                const json = response.data;
               // setCategoryName(json.category);
                setProducts(json.products)
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
        }, [params])

    return (
        <section id='content'>
            <h3>Tarjoukset</h3>
            <div id="products">
            {products.map(product => (
                <div key={product.id}>
                    <div className="card" style={{width: 22 + 'rem', height: 26 + 'rem'}}>
                        <img src={url + 'images/' + product.image} class="card-img-top" alt="img"/>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <div id="cardBottom">
                                <span id='hinta'>{product.price.toFixed(2)}</span>
                                <span id='vanhaHinta'>{product.old_price}</span>
                                <Button id="addToCart" onClick={e => addToCart(product)} variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='productImg'/></Button>
                                </div>
                            </div>
                    </div>
                </div>
            ))}
            </div> 

            
        </section>
    );
}