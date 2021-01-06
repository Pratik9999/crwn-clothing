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

export const removeItem = (item) => {
   return {
      type: CartActionType.REMOVE_ITEM,
      payload: item
   }
}

export const clearItemFromCart = (item) => {
   return {
      type: CartActionType.CLEAR_ITEM_FROM_CART,
      payload: item 
   }
}