import {ActionType, getType} from 'typesafe-actions';
import * as friendActions from '../actions/friend';

interface FriendState {
  count: number;
  error?: any;
}

const initialFriend: FriendState = {
  count: 0,
  error: undefined,
};

type Action = ActionType<typeof friendActions>;

export default function friendReducer(
  state: FriendState = initialFriend,
  action: Action,
) {
  switch (action.type) {
    case getType(friendActions.getFriend.request): {
      return state;
    }
    case getType(friendActions.getFriend.success): {
      return {...state, count: action.payload};
    }
    case getType(friendActions.getFriend.failure): {
      return {...state, error: action.payload};
    }
    case getType(friendActions.updateFriend.request): {
      return {...state, count: action.payload};
    }
    case getType(friendActions.updateFriend.success): {
      return {...state, count: action.payload};
    }
    case getType(friendActions.updateFriend.failure): {
      return {...state, error: action.payload};
    }
    default: {
      return state;
    }
  }
}
