import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import ProductDetails from  './components/ProductDetails/ProductDetails.jsx';
import Cart from './components/Cart/Cart.jsx';
import { useState } from 'react';

function App() {

  let [cartItems, setCartItems] = useState([]);

  function handleAddtoCart(product){
    let item = cartItems.find((item) => item.id === product.id)
    if(item){
        setCartItems(cartItems.map((item)=>item.id === product.id ? {...item, quantity:item.quantity+1} : item))
    }else{
        setCartItems([...cartItems,{...product,quantity:1}])
    }
  }

  function handleRemove(id) {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  function handleQuantityChange(id, quantity) {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };
  let total = cartItems.reduce((acc, item) =>acc+item.price*item.quantity,0);
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails handleAddtoCart={handleAddtoCart} />} />
          <Route path="/cart" element={<Cart  cartItems={cartItems} handleRemove={handleRemove} 
          handleQuantityChange={handleQuantityChange} total={total}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;