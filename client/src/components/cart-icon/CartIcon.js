import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../store/cart/cartActions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../store/cart/cartSelector'; 
import { createStructuredSelector } from 'reselect'; 
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  { toggleCartHidden }
)(CartIcon);