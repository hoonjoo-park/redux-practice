import {useSelector} from 'react-redux';
import * as friendActions from '../actions/friend';
import {selectFriendCount} from '../selectors/friend';
import {dispatch} from '../utils';

const useFriend = () => {
  const friendCount = useSelector(selectFriendCount);

  const updateFriendCount = (count: number) => {
    dispatch(friendActions.updateFriend.request(count));
  };
  return {
    friendCount,
    updateFriendCount,
  };
};

export default useFriend;
