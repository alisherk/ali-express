import { firestore, convertColSnapToMap } from '../../firebase/firebase.utils';

export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START';
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS';
export const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE';

export const fetchCollectionStart = () => ({
  type: FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = colMap => ({
  type: FETCH_COLLECTIONS_SUCCESS, 
  payload: colMap
});

export const fetchCollectionsFailure = errMessage => ({
   type: FETCH_COLLECTIONS_FAILURE, 
   payload: errMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const colRef = firestore.collection('collections');
    dispatch(fetchCollectionStart());
    colRef.get().then(snap => {
      const colMap = convertColSnapToMap(snap);
      dispatch(fetchCollectionsSuccess(colMap));
    })
    .catch(err => dispatch(fetchCollectionsFailure(err.message)));
  };
};
