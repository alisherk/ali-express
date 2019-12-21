import React from 'react';
import './check-out.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal
} from '../../store/cart/cartSelector';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckout from '../../components/stripe/StripeButton';

const Checkout = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product </span>
        </div>
        <div className='header-block'>
          <span> Description </span>
        </div>
        <div className='header-block'>
          <span> Quantity </span>
        </div>
        <div className='header-block'>
          <span> Price </span>
        </div>
        <div className='header-block'>
          <span> Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        <span> TOTAL: ${total} </span>
      </div>
      <div className='test-warning'>
        Please use the following test credit card for payment 
        <br/> 
        4242 4242 4242 4242
      </div>
      <StripeCheckout price={total} /> 
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
