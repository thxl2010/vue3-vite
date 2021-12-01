import { SET_USER, SET_IS_COLLAPSE } from './types';
import type { State } from './state';

export default {
  [SET_USER](state: State, user: State['user']) {
    state.user = user;
  },
  [SET_IS_COLLAPSE](state: State, isCollapse: State['isCollapse']) {
    state.isCollapse = isCollapse;
  },
};
