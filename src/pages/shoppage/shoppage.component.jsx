import { Component } from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {

   state = { 
      collections: SHOP_DATA
   }

   render() { 
      const {collections} = this.state;
      return (
         <div className="shop-page">
            {
               collections.map(({ id, ...collectionsOtherProps }) => {
                  return <CollectionPreview key={id} {...collectionsOtherProps} /> 
               })
            }
         </div>
      );
   }
}
 
export default ShopPage;