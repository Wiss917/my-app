import { getUserInfo } from '@/api/login';
import { GetStaticProps, NextPage } from 'next';
import { Input } from '@mui/material';
import style from '../styles/login.module.scss';
import { useState } from 'react';
const Login: NextPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={style.page}>
      <Input value={name}></Input>
      <Input value={password}></Input>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const { success, data: {
  //   data,
  // } } = await getUserInfo({

  // })
  return {
    props: {
      configs: [],
    },
  };
};

export default Login;
