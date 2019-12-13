import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/ColOverview';
import CollectionPage from '../collection/CollectionPage';
import { firestore, convertColSnapToMap } from '../../firebase/firebase.utils'; 


class ShopPage extends React.Component {
  
  unsubscribeFromSnapshot = null; 

  componentDidMount() {
    const colRef = firestore.collection('collections'); 
    colRef.onSnapshot(async snapshot => {
      convertColSnapToMap(snapshot);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:colId`} component={CollectionPage} />
      </div>
    );
  }
}

export default ShopPage;
