import React from 'react';
import { useContext } from 'react';
import { SelectedProductsContext } from './App';

const  Product = ({product}) => {
    
        const context = useContext(SelectedProductsContext);

        const selectProduct = (product) => {
            const selected = context.selectedProducts.find(x=>x.id==product.id);
    
            if(selected) {
                // mevcut eleman
                selected.count++;
                context.setSelectedProducts([...context.selectedProducts]);
            }
            else {
                context.setSelectedProducts([...context.selectedProducts, {...product, count : 1}]);
            }
        };

        return (
            <div className="card mb-3">
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <img src={ `img/${ product.image }` }  alt="" className='img-fluid' />
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{ product.name }</h5>
                            <p>{ product.price }</p>
                            <button type="button"
                            className='btn btn-primary btn-sm' onClick={() => selectProduct(product)}>Ekle</button>
                        </div>
                    </div>
                </div>
                
                
            </div>
        );
    
}

export default Product;