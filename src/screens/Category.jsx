import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Category = () => {

    const [Categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5084/api/Categories')
            .then(response => {
                console.log(response.data)
                setCategories(response.data);
            })
            .catch(error => {
                console.error('đã có lỗi trong khi kết nối đến server!', error);
            });
    }, []);

  return (
    <div className='category'>
        <h1>THIS IS CATEGORY</h1>
        <div className="category-items">
        {Categories.map(Category => (
            <div className="category-item" key={Category.id}>{Category.name}</div>
          ))}
        </div>
    </div>
  )
}
