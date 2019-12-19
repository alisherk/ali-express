import { takeLatest, call, put, all } from 'redux-saga/effects';
import { FETCH_COLLECTIONS_START } from './shop-types';
 import { firestore, convertColSnapToMap } from '../../firebase/firebase.utils';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shopActions';

function* fetchCollectionAsync() {
  try {
    const colRef = firestore.collection('collections');
    const snapshot = yield colRef.get();
    const collectionMap = yield call(convertColSnapToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }
};

function* onFetchCollectionStart() {
  yield takeLatest(
    FETCH_COLLECTIONS_START, 
    fetchCollectionAsync
  );
};

export function* shopSagas(){
  yield all([call(onFetchCollectionStart)])
}
