import {combineReducers} from 'redux';
import profileReducer from './profile';
import friendReducer from './friend';

const rootReducer = combineReducers({
  profileState: profileReducer,
  friendState: friendReducer,
});

export default rootReducer;
