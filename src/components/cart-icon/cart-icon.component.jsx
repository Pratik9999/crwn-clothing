import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';

import { toogleCartHidder } from '../../redux/cart/cart.action';
import { selectItemCount } from '../../redux/cart/cart.selector';
import './cart-icon.styles.scss';

const CartIcon = ({ toogleCartHidder, itemCount }) => {
   return (
      <div className="cart-icon" onClick={() => toogleCartHidder()}> 
         <ShoppingIcon className="shopping-icon" />
         <span className="item-count">{itemCount}</span> 
      </div>  
   ); 
}

const mapDispatchToProps = (dispatch) => {
   return { toogleCartHidder: () => dispatch(toogleCartHidder()) }
}

const mapStateToProps = (state) => {
   return { itemCount: selectItemCount(state) };    
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon); 