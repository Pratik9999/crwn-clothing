import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';

import { toogleCartHidder } from '../../redux/cart/cart.action'
import './cart-icon.styles.scss';

const CartIcon = ({ toogleCartHidder }) => {
   return (
      <div className="cart-icon" onClick={() => toogleCartHidder()}> 
         <ShoppingIcon className="shopping-icon" />
         <span className="item-count">0</span> 
      </div> 
   ); 
}

const mapDispatchToProps = (dispatch) => {
   return { toogleCartHidder: () => dispatch(toogleCartHidder()) }
}
 
export default connect(null, mapDispatchToProps)(CartIcon);