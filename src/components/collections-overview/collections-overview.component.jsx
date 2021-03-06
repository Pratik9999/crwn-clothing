import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
   return (
      <div className="collections-overview">
         {
            collections.map(({ id, ...collectionsOtherProps }) => {
               return <CollectionPreview key={id} {...collectionsOtherProps} /> 
            })
         }
      </div> 
   );
}

const mapStateToProps = createStructuredSelector({
   collections: selectCollectionsForPreview 
});
 
export default connect(mapStateToProps)(CollectionsOverview);