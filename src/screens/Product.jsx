import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Product = () => {

  const [Products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5084/api/Products')
            .then(response => {
                console.log(response.data)
                setProducts(response.data);
            })
            .catch(error => {
                console.error('đã có lỗi trong khi kết nối đến server!', error);
            });
    }, []);

  return (
    <div className='product'>
        <h1>PAGE PRODUCT</h1>
        <div className="product-items">
          {Products.map(Product => (
            <div className="product-item" key={Product.id}>{Product.name} - {new Date(Product.createdAt).toLocaleDateString()}</div>
          ))}
        </div>
    </div>
  )
}
