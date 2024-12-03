import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard.jsx';
import './Home.css'

function Home() {
  let [products, setProducts] = useState([]);
  let [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products)
    }).catch((err) => {
        console.log(err);
    });
  }, []);

  let Products = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='home'>
        <h1 className='home-heading'></h1>

         <div className='search-container'>
         <input type="text" className='search-input' value={search} placeholder="Search for products" onChange={(e) => setSearch(e.target.value)}/>
         </div>
        
      <div className="product-list">
        {Products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;