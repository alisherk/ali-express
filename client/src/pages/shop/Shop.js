import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/shop/shopActions';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection-page.container';

const ShopPage = ({ match, fetchCollectionStart }) => {

  useEffect(() => {
    fetchCollectionStart();
  },[fetchCollectionStart]);

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


export default connect(null, actions)(ShopPage);
