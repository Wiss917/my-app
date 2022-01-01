import style from './index.module.scss';
import { ArrowBackIos, Tune } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
interface IHeaderProps {
  title: string;
}

export const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <div className={style.header}>
      <IconButton
        aria-label="back"
        onClick={() => {
          console.log('back');
        }}
      >
        <ArrowBackIos></ArrowBackIos>
      </IconButton>
      <span>{title}</span>
      <IconButton aria-label="config">
        <Tune></Tune>
      </IconButton>
    </div>
  );
};

Header.defaultProps = {
  title: 'What About NextJS',
};
