import React, { useState } from "react";

import ProductItem from "./ProductItem";
import ProductSort from "./ProductSort";

import "./Products.css";

function Products(props) {
    const [products, setProducts] = useState(props.items);

    const productSortHandler = (sortBy) => {
        if (sortBy == 1) {
            setProducts(props.items);
        } else if (sortBy == 2) {
            setProducts(
                [...products].sort(
                    (a, b) => a.price.priceIncTax - b.price.priceIncTax
                )
            );
        } else if (sortBy == 3) {
            setProducts(
                [...products].sort(
                    (a, b) => b.price.priceIncTax - a.price.priceIncTax
                )
            );
        } else if (sortBy == 4) {
            setProducts(
                [...products].sort(
                    (a, b) =>
                        b.price.discountPercentage - a.price.discountPercentage
                )
            );
        }
    };

    const productsList = products.map((product) => {
        return <ProductItem key={product.id} data={product} />;
    });

    return (
        <section className="products-list-wrap">
            <div className="products-list-header">
                <ProductSort onProductSort={productSortHandler} />
                <p>{props.results} results</p>
            </div>
            <div className="products-list">{productsList}</div>
        </section>
    );
}

export default Products;
