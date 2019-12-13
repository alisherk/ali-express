import { createSelector } from 'reselect'; 

//input selector
const selectCart = state => state.cart; 

export const selectCartItems = createSelector(
   selectCart, 
   (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    selectCart, 
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
   selectCartItems, 
   cartItems => cartItems.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartTotal = createSelector(
   selectCartItems, 
   cartItems => cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
);