import CartActionType from './cart.types';

export const toogleCartHidder = () => {
   return {
      type: CartActionType.TOOGLE_CART_HIDDEN
   }
}