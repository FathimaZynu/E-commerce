import React from 'react';
import './Cart.css'

function Cart({ cartItems, handleRemove, handleQuantityChange, total }) {



    return (
        <div className="cart-container">
            <h1>My Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your Cart is empty</p>
            ) : (

                <div className='cart-items'>
{cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.thumbnail} className='cart-item-image' alt="" />
                        <div className='cart-item-details'>
                            <h3>{item.title}</h3>
                            <p className='cart-item-price'>${item.price}</p>
                            <div className='cart-item-quantity'>

                                <input type="number" value={item.quantity} onChange={(e) =>
                                    handleQuantityChange(item.id, parseInt(e.target.value))} min={'1'} className='quantity-input'
                                />

                            </div>

                        </div>

                        <button onClick={() => handleRemove(item.id)} className='remove-button'>Remove</button>
                    </div>
                ))}
                </div>
      
      
        )}

            <h2>Total :${total.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;