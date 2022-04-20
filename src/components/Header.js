import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cart from './Cart'


export default function Header({ url, cart }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(url + 'products/getcategories.php/')
      .then((response) => {
        const json = response.data;
        setCategories(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error)
      })
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="logo" to="/"><img id='logo' src='../Gaming Gadgets.png'></img></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id='link' role="button" data-bs-toggle="dropdown" aria-expanded="false">Kategoriat</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {categories.map(category => (
                  <li>
                    <Link className='dropdown-item' to={'/products/' + category.id}>{category.name}</Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/managecategories"style={{color:'white'}}>Kategorioiden ylläpito</Link>
            </li>

           <li className="nav-item">
              <Link className="nav-link" to="/manageproducts"style={{color:'white'}}>Tuotteiden ylläpito</Link>
            </li>
          </ul>

          <ul className='navba-nav ml-auto' id='shoppingCart'>
            <li className='nav-item'>
            <label id="cartLabel">Ostoskori:</label>
            <Cart cart={cart} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}