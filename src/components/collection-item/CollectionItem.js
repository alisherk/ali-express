import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/cart/cartActions'; 
import './col-item.styles.scss';
import CustomButton from '../custom-button/CustomButton';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton className='custom-button' onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default connect(null, { addItem })(CollectionItem);