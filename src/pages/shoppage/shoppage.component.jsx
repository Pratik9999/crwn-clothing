import { Component } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from  '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../pages/collection/collection-page.component';
import { firestore, collectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.action';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {

   state = {
      loading: true
   }

   unsubcribeFromSnapshot = null;

   componentDidMount() {
      const { updateCollections } = this.props
      const collectionRef = firestore.collection('collections');

      collectionRef.onSnapshot(async snapshot => {
         const collectionsMap = collectionsSnapshotToMap(snapshot);
         updateCollections(collectionsMap);
         this.setState({ loading: false });
      });
   }

   render() {
      const { match } = this.props;
      const { loading } = this.state;
      return (
         <div className="shop-page">
            <Route 
               exact 
               path={`${match.path}`} 
               render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} 
            />
            <Route 
               path={`${match.path}/:collectionId`} 
               render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}  
            /> 
         </div> 
      );
   }
}

const mapDispatchToProps = dispatch => ({
   updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);