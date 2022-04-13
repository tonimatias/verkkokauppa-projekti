import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Button from "react-bootstrap/Button";


export default function Popular ({url, addToCart}) {

    const [popularProducts, setPopularProducts] = useState([]);

    let params = useParams();
    
    useEffect(() => {
        axios.get(url + 'products/getpopularproducts.php/')
        .then((response) => {
            const json = response.data;
           // setCategoryName(json.category);
            setPopularProducts(json.popularProducts)
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }, [params])

    return (

<div id="discountProducts">
{popularProducts.map(popular_product => (
    <div key={popular_product.id}>
        <div class="card" style={{width: 20 + 'rem', height: 24 + 'rem'}}>
            <img src={url + 'images/' + popular_product.image} class="card-img-top" alt="img"/>
                <div class="card-body">
                    <h5 class="card-title">{popular_product.name}</h5>
                    <p class="card-text">{popular_product.description}</p>
                    <div id="cardBottom">
                    <span id='hinta'>{popular_product.price.toFixed(2)}</span>
                    <span id='vanhaHinta'>{popular_product.old_price}</span>
                    <Button id="addToCart" onClick={e => addToCart(popular_product)} variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='productImg'/></Button>
                    </div>
                </div>
        </div>
    </div>
))}
</div>
    );
}