import request from '@/utils/axios';



type UserToken = {

}

export function login(data: UserInfo) {
  return request<UserToken>({
    url: '/blade-auth/oauth/token',
    method: 'POST',
    headers: {
      'No-Auth': true,
    },
  });
}
