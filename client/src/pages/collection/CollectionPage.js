import React from 'react';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './collection.styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../store/shop/shopSelector';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items &&
          items.map(item => <CollectionItem key={item.id} item={item} />)}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.colId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
