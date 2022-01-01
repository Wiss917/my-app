/*
 * @Author: your name
 * @Date: 2022-01-01 13:05:55
 * @LastEditTime: 2022-01-01 14:17:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-app-1\src\api\login.ts
 */
import instance from '@/utils/axios';
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

type UserInfo = {
  tenantId: string;
  username: string;
  password: string;
  grant_type: string;
  scope: string;
  type: string;
};

export interface IResponse<T = any> {
  code: number;
  data: T;
  msg: string;
  success: boolean;
}

type UserToken = {
  data: object;
  // userToken: string;
};

export function getUserInfo(data: UserInfo): Promise<IResponse<UserToken>> {
  return instance.post('/blade-auth/oauth/token', {
    data,
  });
}
