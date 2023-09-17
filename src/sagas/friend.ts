import {call, put, takeLatest} from 'redux-saga/effects';
import * as friendActions from '../actions/friend';
import {getState} from '../utils';

const fetchFriendCount = (): Promise<number> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const friend = getState().friendState.count;

      resolve(friend);
    }, 1000);
  });
};

const updateFriend = (count: number): Promise<number> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(count);
    }, 1000);
  });
};

function* getFriendCountSaga() {
  try {
    const response: number = yield call(fetchFriendCount);

    yield put(friendActions.getFriend.success(response));
  } catch (error) {
    yield put(friendActions.getFriend.failure(error));
  }
}

function* updateFriendCountSaga(
  action: ReturnType<typeof friendActions.updateFriend.request>,
) {
  try {
    const response: number = yield call(updateFriend, action.payload);

    yield put(friendActions.updateFriend.success(response));
  } catch (error) {
    yield put(friendActions.updateFriend.failure(error));
  }
}

function* watchFriendSaga() {
  yield takeLatest(friendActions.getFriend.request, getFriendCountSaga);
  yield takeLatest(friendActions.updateFriend.request, updateFriendCountSaga);
}

export default watchFriendSaga;
