import React, { useState } from 'react';
import '../task2/Style.css'
const productData = [
  { id: 1, name: 'Product 1', count: 1 },
  { id: 2, name: 'Product 2', count: 1 },
  { id: 3, name: 'Product 3', count: 1 },
];

function Products() {
  const [products, setProducts] = useState(productData);

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Product ${products.length + 1}`,
      count: 1,
    };
    setProducts([...products, newProduct]);
  };

  const incrementCount = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, count: product.count + 1 } : product
    );
    setProducts(updatedProducts);
  };

  const decrementCount = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id && product.count > 0
        ? { ...product, count: product.count - 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="products">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <p>{product.name}</p>
          <div className="counter">
            <button onClick={() => decrementCount(product.id)}>-</button>
            <span>{product.count}</span>
            <button onClick={() => incrementCount(product.id)}>+</button>
          </div>
        </div>
      ))}
      <button className="add-product" onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
}

export default Products;
