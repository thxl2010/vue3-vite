import { UserInterface } from '@/models/user/User.interface';

export interface StateInterface {
  [x: string]: any;
  user: UserInterface | null;
  isCollapse: boolean;
}
