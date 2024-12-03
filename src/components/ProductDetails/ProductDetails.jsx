import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css'

function ProductDetails({handleAddtoCart}) {
  let { id } = useParams();
  let [product, setProduct] = useState(null);

  useEffect(() => {
     console.log(id);
     
    axios.get(`https://dummyjson.com/products/${id}`).then((res) =>{
        // console.log(res.data)
        setProduct(res.data)
    }).catch((err) =>{
        console.log(err)
    });
  }, []);

  if (!product) return <p>Loading...</p>;

  function handleAdd(){
    console.log('Adding product to cart:', product);
    
     handleAddtoCart(product);
  }

  return (
    <div className="product-details">
      <img src={product.thumbnail} alt='' />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;