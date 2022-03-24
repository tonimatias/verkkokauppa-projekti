import React from "react";


function Kuulokkeet() {
    return (
        <div>
            <h1>Kuulokkeet</h1>
            {products.map(product => (

            
            <div class="card" style="width: 18rem;" key={product.id}>
                <img src="{...}" class="card-img-top" alt="..."/>{product.img}
                    <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <p class="card-text">{product.description} <br></br> {product.price}</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='hiiri2'></img></button>
                    </div>
            </div>
            ))}
        </div>
    );
}

export default Kuulokkeet;