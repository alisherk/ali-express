import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/shop/shopActions';
import Spinner from '../../components/spinner/Spinner';

//comps
const CollectionOverviewContainer = lazy(() =>
  import('../../components/collection-overview/collection-overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection-page.container')
);

const ShopPage = ({ match, fetchCollectionStart }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:colId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

export default connect(null, actions)(ShopPage);
