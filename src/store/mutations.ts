import { SET_USER_INFO } from './types';

export default {
  [SET_USER_INFO](state, user) {
    state.user = {
      ...state.user,
      ...user,
    };
  },
};
