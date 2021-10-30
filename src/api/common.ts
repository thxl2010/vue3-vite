/**
 * 公共请求模块
 */
import request from '@/utils/request';
import { ILoginInfo } from '@/api/types/common';

// interface ResponseData<T = any> {
//   status: number;
//   msg: string;
//   data: T;
// }

export const getLoginInfo = () => {
  // return request({
  //   method: 'GET',
  //   url: '/login/info',
  // });

  // return request.get<{
  //   status: number;
  //   msg: string;
  //   data: {
  //     login_logo: string;
  //     logo_rectangle: string;
  //     logo_square: string;
  //     slide: string[];
  //   };
  // }>('/login/info');

  // return request.get<
  //   ResponseData<{
  //     login_logo: string;
  //     logo_rectangle: string;
  //     logo_square: string;
  //     slide: string[];
  //   }>
  // >('/login/info');

  return request<ILoginInfo>({
    method: 'GET',
    url: '/login/info',
  });
};
