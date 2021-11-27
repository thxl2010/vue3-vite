import { SET_USER_INFO, SET_IS_COLLAPSE } from './types';
import { StateInterface } from '@/models/store/State';

export default {
  [SET_USER_INFO](state: StateInterface, user: StateInterface['user']) {
    state.user = user;
  },
  [SET_IS_COLLAPSE](
    state: StateInterface,
    isCollapse: StateInterface['isCollapse']
  ) {
    state.isCollapse = isCollapse;
  },
};
