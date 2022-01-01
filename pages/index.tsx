import { GetStaticProps, NextPage } from 'next';
import { TabBar } from '@/components/TabBar';
import { Header } from '@/components/Header';

interface IHomeProps {
  configs: config[]
}

type config = {
  name: string,
  alias: string,
  remark: string,
  link: string
}

const Home: NextPage<IHomeProps>= ({ configs }) => {
  const barItems = ['图表', '首页', '我的'];
  return (
    <div>
      <Header title='Hello NextJs'></Header>
      <div className="main"></div>
      <div className="footer"></div>
      <TabBar barItems={barItems}></TabBar>
    </div>
  );
};

export const getStaticProps: GetStaticProps =async () => {
  return {
    props: {
      configs: []
    }
  }
}

export default Home;
