import { IUserInfo /* , IMenu */ } from '@/api/types/common';

const state = {
  user: null as ({ token: string } & IUserInfo) | null,
  isCollapse: false,
};

export default state;

export type State = typeof state;
