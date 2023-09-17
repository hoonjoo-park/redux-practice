import {createAsyncAction} from 'typesafe-actions';

export enum FriendActionTypes {
  GET_FRIEND_REQUEST = 'GET_FRIEND_REQUEST',
  GET_FRIEND_SUCCESS = 'GET_FRIEND_SUCCESS',
  GET_FRIEND_FAILURE = 'GET_FRIEND_FAILURE',
  UPDATE_FRIEND_REQUEST = 'UPDATE_FRIEND_REQUEST',
  UPDATE_FRIEND_SUCCESS = 'UPDATE_FRIEND_SUCCESS',
  UPDATE_FRIEND_FAILURE = 'UPDATE_FRIEND_FAILURE',
}

export const getFriend = createAsyncAction(
  FriendActionTypes.GET_FRIEND_REQUEST,
  FriendActionTypes.GET_FRIEND_SUCCESS,
  FriendActionTypes.GET_FRIEND_FAILURE,
)<void, number, any>();

export const updateFriend = createAsyncAction(
  FriendActionTypes.UPDATE_FRIEND_REQUEST,
  FriendActionTypes.UPDATE_FRIEND_SUCCESS,
  FriendActionTypes.UPDATE_FRIEND_FAILURE,
)<number, number, any>();
