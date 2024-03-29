import axios from 'axios';
import CategoryList from '../components/CategoryList';
import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';

export default function ManageProducts({ url }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [addingProduct, setAddingProduct] = useState(false);
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [oldPrice, setOldPrice] = useState('null');
    const [productDescription, setProductDescription] = useState('');

    useEffect(() => {
        if (selectedCategory !== null) {
            axios.get(url + 'products/getproducts.php/' + selectedCategory.id)
                .then((response) => {
                    const json = response.data;
                    if (json) {
                        setProducts(json.products);
                    }
                }).catch(error => {
                    alert(error.response === undefined ? error : error.response.data.error);
                })
        }
    }, [url, selectedCategory]);

    function saveProduct(e) {
        e.preventDefault();
        const json = JSON.stringify({
            name: productName,
            price: price,
            oldprice: oldPrice,
            description: productDescription,
            categoryid: selectedCategory.id
        });
        axios.post(url + 'products/addproduct.php', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                const updatedProducts = [...products, response.data];
                setProducts(updatedProducts);
                setAddingProduct(false);
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }

    if (!addingProduct) {
        return (
            <div id='manage'>
                <h3 className='heading'>Tuotteiden ylläpito</h3>
                <CategoryList
                    url={url}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <table className='table'>
                    <thead>
                        <tr key={uuid()}>
                            <th>Tuotteen nimi</th>
                            <th>Hinta</th>
                            <th className='desc'>Kuvaus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={uuid()}>
                                <td>{product.name}</td>
                                <td>{product.price} €</td>
                                <td className='desc'>{product.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <button className="btn btn-dark" type="button" onClick={() => setAddingProduct(true)}>Lisää</button>
                </div>
            </div>
        )
    } else {
        return (
            <div id='manageForm'>
                <h3 className='heading'>Lisää tuote</h3>
                <form onSubmit={saveProduct}>
                    <div>
                        <label>Tuotteen nimi</label>
                        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
                    </div>
                    <div>
                        <label>Hinta</label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <label>Kuvaus</label>
                        <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
                    </div>
                    <button className="btn btn-dark" type="button" onClick={() => setAddingProduct(false)}>Peruuta</button>
                    <button className="btn btn-dark" type="submit">Tallenna</button>
                </form>
            </div>
        )
    }
}