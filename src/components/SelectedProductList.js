import React from "react";
import { useContext } from "react";
import { SelectedProductsContext } from "./App";

const SelectedProductList = () => {

    const context = useContext(SelectedProductsContext);

    const deleteProduct = (id) => {
        context.setSelectedProducts(context.selectedProducts.filter(x => x.id != id));
    }
        return (

            <div>
                {
                    (context.products.length == 0) ?
                        <div className="alert alert-warning"> Seçilen ürün yok </div>
                    :
                    <ol className="list-group list-group-numbered">
                    {
                    context.selectedProducts.map((item, index) => 
                        <li className="list-group-item d-flex justify-content-between align-items-start" key={index}>
                            <div className="ms-2 me-auto">
                                { item.name }
                            </div>
                            <span className="badge bg-primary rounded-pill me-2">{item.count}</span>
                            <span className="badge bg-danger rounded-pill" onClick={() => deleteProduct(item.id)}>X</span>
                        </li>
                    )
                    }
                    </ol>
                }
            </div>

            
        );
    }


export default SelectedProductList;