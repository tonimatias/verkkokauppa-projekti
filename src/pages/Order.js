import React from 'react';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Order({ url, cart, removeFromCart, updateAmount, empty }) {
    const [inputs, _] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [finished, setFinished] = useState(false);

    let sum = 0;

    function order(e) {
        e.preventDefault();

        const json = JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            address: address,
            zip: zip,
            city: city,
            cart: cart,
        });
        axios.post(url + 'order/save.php', json, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                empty();
                setFinished(true);
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error)
            })
    }


    function changeAmount(e, product, index) {
        updateAmount(e.target.value, product);
        setInputIndex(index);
    }

    useEffect(() => {
        for (let i = 0; i < cart.length; i++) {
            inputs[i] = React.createRef();
        }
    }, [cart.length])

    useEffect(() => {
        if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
            inputs[inputIndex].current.focus();
        }
    }, [cart])

    if (finished === false) {
        return (
            <div id='order'>
                <h3 className='header'>Ostoskorin tuotteet</h3>
                <table className='table'>
                    <tbody>
                        {cart.map((product, index) => {
                            sum += parseFloat(product.price) * product.amount;
                            return (
                                <tr key={uuid()}>
                                    <td>{product.name}</td>
                                    <td>{product.price.toFixed(2)} €</td>
                                    <td>
                                        <input type='number' ref={inputs[index]} style={{ width: '60px' }} value={product.amount} onChange={e => changeAmount(e, product, index)}></input>
                                    </td>
                                    <td><a href='#' onClick={() => removeFromCart(product)}>Poista</a></td>
                                </tr>
                            )
                        })}
                        <tr key={uuid()}>
                            <td>Yhteensä: </td>
                            <td>{sum.toFixed(2)} €</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                {cart.length > 0 &&
                    <div id='clientInfo'>
                        <h3 className='header'>Asiakastiedot</h3>
                        <form onSubmit={order}>
                            <div className='form-group'>
                                <label style={{ color: 'black' }}>Etunimi:</label>
                                <input className='form-control' required onChange={e => setFirstname(e.target.value)}></input>
                            </div>
                            <div className='form-group'>
                                <label style={{ color: 'black' }}>Sukunimi:</label>
                                <input className='form-control' required onChange={e => setLastname(e.target.value)}></input>
                            </div>
                            <div className='form-group'>
                                <label style={{ color: 'black' }}>Osoite:</label>
                                <input className='form-control' required onChange={e => setAddress(e.target.value)}></input>
                            </div>
                            <div className='form-group'>
                                <label style={{ color: 'black' }}>Postinumero:</label>
                                <input className='form-control' required onChange={e => setZip(e.target.value)}></input>
                            </div>
                            <div className='form-group'>
                                <label style={{ color: 'black' }}>Kaupunki:</label>
                                <input className='form-control' required onChange={e => setCity(e.target.value)}></input>
                            </div>
                            <div className='buttons' id='orderButton'>
                                <button className='btn btn-primary'>Tilaa</button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        )
    } else {
        return (<h3>Tilaus on vastaanotettu. Kiitos tilauksestasi!</h3>)
    }
}
