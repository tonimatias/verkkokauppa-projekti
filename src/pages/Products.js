import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Button from "react-bootstrap/Button";


export default function Products({url,addToCart}) {

    const [categoryName, setCategoryName] = useState('');
    const [products, setProducts] = useState([]);

    let params = useParams();

    useEffect(() => {
        axios.get(url + 'products/getproducts.php/' + params.categoryId)
        .then((response) => {
            const json = response.data;
            setCategoryName(json.category);
            setProducts(json.products)
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }, [params])

    //{product.image}
    //, height: 24 + 'rem' 
    //
    return (
        <div id="category">
           <h3>{categoryName}</h3>
           <div id="products">
            {products.map(product => (
                <div key={product.id}>
                    <div class="card" style={{width: 22 + 'rem', height: 26 + 'rem'}}>
                        <img src={url + 'images/' + product.image} class="card-img-top" alt="img"/>
                            <div class="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                <p class="card-text">{product.description}</p>
                                <div id="cardBottom">
                                <span id='hinta'>{product.price.toFixed(2)}</span>
                                <span id='uusi_hinta'>{product.old_price.toFixed(2)}</span>
                                <Button id="addToCart" onClick={e => addToCart(product)} variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='productImg'/></Button>
                                </div>
                            </div>
                    </div>
                </div>
            ))}
            </div> 
        </div>
    );
}