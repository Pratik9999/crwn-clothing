import CartActionType from './cart.types';
import { addItemToCart } from './cart.utils';

const INITAL_STATE = {
   hidden: true,
   cartItems: []
}

const cartReducer = (state = INITAL_STATE, action) => {
   switch (action.type) {
      case CartActionType.TOOGLE_CART_HIDDEN:
         return { ...state, hidden: !state.hidden } 
      case CartActionType.ADD_ITEM:
         return { 
            ...state, 
            cartItems : addItemToCart(state.cartItems, action.payload) 
         }
      default:
         return state; 
   }
}

export default cartReducer;