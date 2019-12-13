import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../store/cart/cartSelector';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../store/cart/cartActions'; 
import { CartDropdownButton ,CartDropdownContainer, EmptyMsgContainer, CartItemsContainer } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useHistory(); 

  function handleClick() {
    history.push('/checkout'); 
    dispatch(toggleCartHidden());
  }

 return (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems &&
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMsgContainer className='empty-message'> Your cart is empty </EmptyMsgContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton onClick={handleClick}>GO TO CHECKOUT</CartDropdownButton>
  </CartDropdownContainer>
 )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
