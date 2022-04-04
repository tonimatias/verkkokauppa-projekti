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
    return (
        <div id="category">
           <h3>{categoryName}</h3>
           <div id="products">
            {products.map(product => (
                <div key={product.id}>
                    <div className="card" style={{width: 22 + 'rem', height: 24 + 'rem' }}>
                        <img src="img" className="card-img-top" alt="img"/>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <Button onClick={e => addToCart(product)} variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='productImg'/></Button>
                                <div id='hinta'>{product.price}</div>
                            </div>
                    </div>
                </div>
            ))}
            </div> 
        </div>
    );
}