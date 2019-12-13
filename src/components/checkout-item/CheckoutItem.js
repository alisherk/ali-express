import React from 'react';
import { connect } from 'react-redux'; 
import './checkout-item.styles.scss'; 
import * as actions from '../../store/cart/cartActions';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
    
    const { name, imageUrl, quantity, price } = cartItem;
    
    return (
        <div className='checkout-item'>
            <div className='image-container'> 
                <img src={imageUrl} alt='item' /> 
            </div> 
            <span className='name'> {name} </span>
            <span className='quantity'> 
             <div className='arrow' onClick={() => removeItem(cartItem)}> &#10094; </div>
               <span className='value'>{quantity} </span> 
             <div className='arrow' onClick={() => addItem(cartItem)}> &#10095; </div>
            </span>
            <span className='price'> {price} </span>
            <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}> &#10005; </div>
        </div>
    );
}


export default connect(null, actions)(CheckoutItem);