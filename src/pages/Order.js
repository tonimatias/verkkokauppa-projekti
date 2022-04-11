import React from 'react';
import uuid from 'react-uuid';
import {useState, useEffect} from 'react';

export default function Order({cart,removeFromCart,updateAmount}) {
    const [inputs,_] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);

    let sum = 0;

    function changeAmount(e,product,index) {
        updateAmount(e.target.value,product);
        setInputIndex(index);
    }

    useEffect(() => {
      for (let i = 0;i<cart.length;i++){
          inputs[i] = React.createRef();
      }
    }, [cart.length])
    
    useEffect(()=> {
        if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
            inputs[inputIndex].current.focus();
        }
    },[cart])

  return (
    <div>
        <h3 className='header'>Ostoskorin tuotteet</h3>
        <table className='table'>
            <tbody>
                {cart.map((product,index) => {
                    sum+=parseFloat(product.price) * product.amount;
                    return (
                        <tr key={uuid()}>
                            <td>{product.name}</td>
                            <td>{product.price.toFixed(2)} €</td>
                            <td>{product.old_price.toFixed(2)} €</td>
                            <td>
                                <input /* type='number' */ ref={inputs[index]} style={{width: '60px'}} value={product.amount} onChange={e => changeAmount(e,product)}></input>
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
    </div>
  )
}
