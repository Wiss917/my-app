import { getUserInfo } from '@/api/login';
import { GetStaticProps, NextPage } from 'next';

const Login: NextPage = () => {
  return <div></div>;
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
