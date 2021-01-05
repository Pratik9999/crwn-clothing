import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
   return (
      <div className="cart-dropdown">
         <div className="cart-items">
            {cartItems.map((cartItem) => {
               return <CartItem key={cartItem.id} item={cartItem}  /> 
            })}
         </div>
         <CustomButton>go to checkout</CustomButton> 
      </div>
   );
}

const mapStateToProps = (state) => {
   return { cartItems: selectCartItems(state) }; 
}
 
export default connect(mapStateToProps)(CartDropdown);