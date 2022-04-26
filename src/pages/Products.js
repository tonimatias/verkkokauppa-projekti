import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Button from "react-bootstrap/Button";


export default function Products({url,addToCart}) {

    const [categoryName, setCategoryName] = useState('');
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');

    let params = useParams();

    useEffect(() => {
        let address = '';

        if (params.searchPhrase === undefined) {
            address = url + 'products/getproducts.php/' + params.categoryId;
        } else {
            address = url + 'products/searchproducts.php/' + params.searchPhrase;
        }

        axios.get(address)
        .then((response) => {
            const json = response.data;
            if(params.searchPhrase === undefined) {
                setName(json.category);
                setProducts(json.products);
                setCategoryName(json.category);
            }else {
                setName(params.searchPhrase);
                setProducts(json);
                setCategoryName( 'Tulokset hakusanalla: ' + params.searchPhrase);
            }
        })
    },[params])


/*     useEffect(() => {
        axios.get(url + 'products/getproducts.php/' + params.categoryId)
        .then((response) => {
            const json = response.data;
            setCategoryName(json.category);
            setProducts(json.products)
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }, [params]) */

    return (
        <div id="category">
           <h3 className="heading">{categoryName}</h3>
           <div id="products">
            {products.map(product => (
                <div key={product.id}>
                    <div className="card" style={{width: 22 + 'rem', height: 26 + 'rem'}}>
                        <img src={url + 'images/' + product.image} className="card-img-top" alt="img"/>
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
        </div>
    );
}