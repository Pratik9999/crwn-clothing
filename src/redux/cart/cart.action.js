import CartActionType from './cart.types';

export const toogleCartHidder = () => {
   return {
      type: CartActionType.TOOGLE_CART_HIDDEN
   }
} 

export const addItem = (item) => {
   return {
      type: CartActionType.ADD_ITEM,
      payload: item
   }
}