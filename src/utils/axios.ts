import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: `http://wangge.xcuni.com:10365/testxclife/ch${
    process.env.NODE_ENV === 'development' ? 'Show' : 'Dev'
  }Show/mobile/mobileApi`,
  timeout: 10000,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    Authorization: 'Basic c2FiZXI6c2FiZXJfc2VjcmV0',
  },
});

instance.defaults.withCredentials = true;

export interface IResponse {
  code: number;
  data: any;
  msg: string;
  success: boolean;
}

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers = {
        ...config.headers,
        'Blade-Auth': `Bearer ${token}`,
      };
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status !== 200) {
      console.log(response);
    }
    return response.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
