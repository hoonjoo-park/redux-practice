import {Store} from '../configs/store';

export const selectFriendState = (state: Store) => state.friendState;

export const selectFriendCount = (state: Store) =>
  selectFriendState(state).count;
