import React from "react";

import "./ProductSort.css";

const ProductSort = (props) => {
    const sortChangeHandler = (event) => {
        props.onProductSort(event.target.value);
    };

    return (
        <div className="products-sort">
            <div className="products-sort__control">
                <label>Sort by</label>
                <select value={props.selected} onChange={sortChangeHandler}>
                    <option value="1">Recommended</option>
                    <option value="2">Price Low to Hight</option>
                    <option value="3">Price High to Low</option>
                    <option value="4">Largest Discount</option>
                </select>
            </div>
        </div>
    );
};

export default ProductSort;
