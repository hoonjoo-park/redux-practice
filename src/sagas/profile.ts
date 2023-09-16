import {call, put, takeLatest} from 'redux-saga/effects';
import {getType} from 'typesafe-actions';
import {getProfile, updateProfile} from '../actions/profile';
import {Profile} from '../types';
import {getState} from '../utils';

const postProfile = ({nickname, mbti}: Profile): Promise<Profile> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const response = {nickname, mbti};

      resolve(response);
    }, 1000);
  });
};

const fetchProfile = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const {nickname, mbti} = getState().profileState.profile;
      const response = {nickname, mbti};

      resolve(response);
    }, 1000);
  });
};

function* getProfileSaga() {
  try {
    const response: Profile = yield call(fetchProfile);

    yield put(getProfile.success(response));
  } catch (error) {
    yield put(getProfile.failure(error));
  }
}

function* updateProfileSaga(action: ReturnType<typeof updateProfile.request>) {
  try {
    const response: Profile = yield call(postProfile, action.payload);

    yield put(updateProfile.success(response));
  } catch (error) {
    yield put(updateProfile.failure(error));
  }
}

function* watchProfileSaga() {
  yield takeLatest(getType(getProfile.request), getProfileSaga);
  yield takeLatest(getType(updateProfile.request), updateProfileSaga);
}

export default watchProfileSaga;
