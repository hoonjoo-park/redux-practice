import {all, call} from 'redux-saga/effects';
import watchProfileSaga from './profile';
import watchFriendSaga from './friend';

function* rootSaga() {
  yield all([call(watchProfileSaga), call(watchFriendSaga)]);
}

export default rootSaga;
