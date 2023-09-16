import {all, call} from 'redux-saga/effects';
import watchProfileSaga from './profile';

function* rootSaga() {
  yield all([call(watchProfileSaga)]);
}

export default rootSaga;
