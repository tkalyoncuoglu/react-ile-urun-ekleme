import React from "react";
import { useState, createContext } from "react";
import ProductList from "./ProductList";
import Header from "./Header";
import NewProduct from "./NewProduct";
import SelectedProductList from './SelectedProductList';

const SelectedProductsContext = createContext();

const App = () => {

    
    
    const [selectedProducts, setSelectedProducts] = useState([]);

    const  products = [
                {
                    id : 1,
                    name: "iphone 15",
                    price: 50000,
                    image: "1.jpg"
                },
                {
                    id : 2,
                    name: "iphone 16",
                    price: 60000,
                    image: "2.jpg"
                },
                {
                    id : 3,
                    name: "iphone 17",
                    price: 60000,
                    image: "3.jpg"
                }
            ];
    
    


   


        return (
            <SelectedProductsContext.Provider value={{products, selectedProducts, setSelectedProducts}}>
            <div className="container mt-3">
                <Header selectedProducts={selectedProducts}/>
                <div className="row mt-3">
                    <div className="col-4">
                        <NewProduct/>
                    </div>
                    <div className="col-4">
                        <ProductList/>
                    </div>
                    <div className="col-4">
                        <SelectedProductList/>
                    </div>
                </div>
                
                        
                   
            </div>
            </SelectedProductsContext.Provider>
        );
    
}

export default App;

export {SelectedProductsContext};