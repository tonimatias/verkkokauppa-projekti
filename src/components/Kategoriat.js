import React from "react";
import Products from "../pages/Products";

export default function Kategoriat() {
    return (
        <div>
            <h3>Kategoriat {categoryName} </h3>
            {products.map(product => (
                <div key={product.id}>
                    {product.name}
                </div>
            ))}
        </div>
    );
}