import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItem, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <div className="cart">
            <div className="cartItems">
                <div className="cartItems-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item) => {
                    // Check if the item exists in the cart
                    if (cartItem[item._id] > 0) {
                        return (
                            <div key={item._id}> {/* Use item._id as a unique key */}
                                <div className="cartItems-title cartItems-item">
                                    <img src={url + "/images/" + item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItem[item._id]}</p>
                                    <p>${item.price * cartItem[item._id]}</p>
                                    <p onClick={() => { removeFromCart(item._id) }} className="cross">x</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null; // Return null for items not in the cart
                })}
            </div>
            <div className='cart-bottom'>
                <div className='cart-total'>
                    <h2>Cart Totals</h2>
                    <div>
                        <div className='cart-total-details'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cart-total-details'>
                            <p>Delivery fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className='cart-total-details'>
                            <b>Total</b>
                            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                        </div>
                        <hr />
                    </div>
                    <button onClick={() => navigate('/order')}>Proceed to CheckOut</button>
                </div>
                <div className='cart-promoCode'>
                    <div>
                        <p>If you have a promo code, enter it here.</p>
                        <div className='cart-promoCode-input'>
                            <input type="text" placeholder="promoCode" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
