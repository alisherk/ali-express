import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  selectShop,
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  selectShopCollections,
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = colUrlParam =>
  createSelector(selectShopCollections, collections =>
    collections ? collections[colUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  selectShop, 
  shop => shop.isFetching 
)

export const selectLoadedCollection = createSelector(
  selectShop, 
  shop => !!shop.collections
)