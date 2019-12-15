import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/shop/shopActions';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection-page.container';

class ShopPage extends React.Component {

  componentDidMount() {
    
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
   
   /*const resp = await fetch('https://firestore.googleapis.com/v1/projects/clth-shop/databases/(default)/documents/collections');
     const result = await resp.json();  */
/*     const colRef = firestore.collection('collections'); 
    this.unsubscribeFromSnapshot = colRef.onSnapshot(async snapshot => {
      const colMap = convertColSnapToMap(snapshot);
      this.props.updateCollections(colMap);
      this.setState({loading: false}); 
    });  */
  }

  render() {
    const { match } = this.props; 

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:colId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

export default connect(null, actions)(ShopPage);
