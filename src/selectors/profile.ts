import {Store} from '../configs/store';

export const selectProfileState = (state: Store) => state.profileState;

export const selectProfile = (state: Store) =>
  selectProfileState(state).profile;
