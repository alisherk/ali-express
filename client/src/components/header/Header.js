import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown'; 
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCartHidden } from '../../store/cart/cartSelector';
import { selectCurrentUser } from '../../store/user/userSelector'; 
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';
import * as actions from '../../store/user/userActions';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink className='option' to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={signOutStart}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
       <CartIcon />
    </OptionsContainer>
   {hidden ? null : <CartDropdown />} 
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
}); 

export default connect(mapStateToProps, actions)(Header);