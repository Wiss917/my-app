import { getUserInfo } from '@/api/login';
import Image from 'next/image'
import { GetStaticProps, NextPage } from 'next';

const Login: NextPage = () => {
  return (
    <div>
      {/* <Image src={require('@/assets/4.jpg')} alt='登陆'></Image> */}
      
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
