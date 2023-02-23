import React, { useState } from "react";

import Products from "./components/Products";
import Filter from "./components/Filter";
import data from "./example-payload.json";
import "./App.css";

const App = () => {
    const [list, setList] = useState(data.item);
    const [products, setProducts] = useState(list.products);

    return (
        <div className='products-listing-wrap'>
            <Filter className='products-filter'></Filter>
            <Products items={products} results={list.pagination.total} />
        </div>
    );
};

export default App;


