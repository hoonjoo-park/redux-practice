import {useSelector} from 'react-redux';
import * as profileActions from '../actions/profile';
import {selectProfile} from '../selectors/profile';
import {dispatch} from '../utils';

const useProfile = () => {
  const profile = useSelector(selectProfile);

  const updateProfile = (nickname: string, mbti: string) => {
    dispatch(profileActions.updateProfile.request({nickname, mbti}));
  };

  return {
    profile,
    updateProfile,
  };
};

export default useProfile;
