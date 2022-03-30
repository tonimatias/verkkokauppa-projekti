import axios from "axios";
import Kategoriat from '../components/Kategoriat';
import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom"
import { Form } from "react-bootstrap";

export default function Products({url}) {

    const [categoryName, setCategoryName] = useState('');
    const [products, setProducts] = useState([]);

    let params = useParams();

    useEffect(() => {
        axios.get(url + 'products/getproducts.php' + params.categoryId)
        .then((response) => {
            const json = response.data;
            setCategoryName(json.category);
            setProducts(json.products)
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }, [params])

    return (
        <div>
            < Kategoriat />
            
        </div>
    );
}