import axios from 'axios';
import CategoryList from '../components/CategoryList';
import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import Button from 'react-bootstrap/Button';

export default function ManageProducts({url}) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products,setProducts] = useState ([]);
    const [addingProduct, setAddingProduct] = useState (false);
    const [editProduct, setEditProduct] = useState (false);
    const [productName,setProductName] = useState('');
    const [price,setPrice] = useState('');
    const [oldPrice,setOldPrice] = useState('null');
    const [productDescription,setProductDescription] = useState('');
    const [productId,setProductId] = useState('');


    useEffect(() => {
        if (selectedCategory !== null) {
            axios.get(url + 'products/getproducts.php/' + selectedCategory.id)
            .then((response) => {
                const json = response.data;
                if (json) {
                    setProducts(json.products);
                }
            }).catch (error => {
                alert(error.response === undefined ? error: error.response.data.error);
            })
        }
    }, [url,selectedCategory]);

    function saveProduct(e){
        e.preventDefault();
        const json = JSON.stringify({
            name: productName,
            price: price,
            oldprice: oldPrice,
            description: productDescription,
            categoryid: selectedCategory.id,
            productid: productId
        });
        axios.post(url + 'products/editproduct.php',json,{
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((response) => {
            const updatedProducts = [...products,response.data];
            setProducts(updatedProducts);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }

    return (
        <div id='manage'>
            <h3>Manage products</h3>
            <CategoryList
                url={url}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <table className='table'>
                <thead>
                    <tr key={uuid()}>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Old Price</th>
                        <th>Description</th>
                        <th>Product ID</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={uuid()}>
                        <td>{product.name}</td>
                        <td>{product.price} €</td>
                        <td>{product.old_price} €</td>
                        <td>{product.description}</td>
                        <td>{product.id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div id='manageForm'>
                <h3>Edit existing products</h3>
                <form onSubmit={saveProduct}>
                    <div>
                        <label>Product name</label>
                        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)}/>
                    </div>
                    <div>
                        <label>Product price</label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div>
                        <label>Old product price</label>
                        <input type="text" value={oldPrice} onChange={(e) => setOldPrice(e.target.value)}/>
                    </div>
                    <div>
                        <label>Product description</label>
                        <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)}/>
                    </div>
                    <div>
                        <label>Product ID</label>
                        <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)}/>
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}