import {createAsyncAction} from 'typesafe-actions';
import {Profile} from '../types';

export enum ProfileActionTypes {
  GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST',
  GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS',
  GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE',
  UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST',
  UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS',
  UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE',
}

export const getProfile = createAsyncAction(
  ProfileActionTypes.GET_PROFILE_REQUEST,
  ProfileActionTypes.GET_PROFILE_SUCCESS,
  ProfileActionTypes.GET_PROFILE_FAILURE,
)<void, Profile, any>();

export const updateProfile = createAsyncAction(
  ProfileActionTypes.UPDATE_PROFILE_REQUEST,
  ProfileActionTypes.UPDATE_PROFILE_SUCCESS,
  ProfileActionTypes.UPDATE_PROFILE_FAILURE,
)<Profile, Profile, any>();
