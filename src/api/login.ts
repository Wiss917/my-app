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

type UserToken = {
  data: object,
  // userToken: string;
};

export function getUserInfo(data: UserInfo): AxiosPromise<UserToken> {
  return instance({
    url: '/blade-auth/oauth/token',
    method: 'POST',
    // headers: {
    //   'No-Auth': true,
    // },
    data
  });
}
