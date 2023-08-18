import React from "react";
import Product from "./Product";
import { useContext } from "react";
import { SelectedProductsContext } from "./App";

const ProductList = () => {
    
        const context = useContext(SelectedProductsContext);

        return (
            context.products.map((product,index) => (
                <Product product={product} key={index} />
            ))
        );
    
}

export default ProductList;