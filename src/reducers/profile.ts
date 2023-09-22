import {ActionType, getType} from 'typesafe-actions';
import {Profile} from '../types';
import * as profileActions from '../actions/profile';

interface ProfileState {
  profile: Profile;
  isLoading: boolean;
  error?: any;
}

const initialProfile: ProfileState = {
  profile: {
    nickname: '',
    mbti: '',
  },
  isLoading: false,
  error: undefined,
};

type Action = ActionType<typeof profileActions>;

export default function profileReducer(
  state: ProfileState = initialProfile,
  action: Action,
) {
  switch (action.type) {
    case getType(profileActions.getProfile.request): {
      return {...state, isLoading: true};
    }
    case getType(profileActions.getProfile.success): {
      const profile = action.payload;
      return {...state, profile, isLoading: false};
    }
    case getType(profileActions.getProfile.failure): {
      const error = action.payload;
      return {...state, error, isLoading: false};
    }
    case getType(profileActions.updateProfile.request): {
      return {...state, isLoading: true};
    }
    case getType(profileActions.updateProfile.success): {
      const profile = action.payload;
      return {...state, profile, isLoading: false};
    }
    case getType(profileActions.updateProfile.failure): {
      const error = action.payload;
      return {...state, error, isLoading: false};
    }
    default: {
      return state;
    }
  }
}
