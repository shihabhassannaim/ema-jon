import React, { useState } from 'react';
import fakeData from './../../fakeData/index';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0 , 10)
    const [products , setProducts] = useState(first10);
    const [cart , setCart] = useState([]);
    const handleAddProduct = (product) => {
        console.log(product)
        const newCart = [...cart , product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                  products.map(pd => <Product handleAddProduct = {handleAddProduct} product = {pd}></Product>)
                }
            </div>
            <div className="card-container">
                <Cart cart = {cart}></Cart>
                
                </div>
          
        </div>
    );
};

export default Shop;