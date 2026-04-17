import React from 'react';
import './index.css';
import products from './data/products';
import ProductTable from './components/product_table';

function App() {
  return (
    <div>
      <h1>Product Wishlist</h1>
      <ProductTable products={products} />
    </div>
  );
}

export default App;