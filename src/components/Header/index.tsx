import style from './index.module.scss';
import { ArrowBackIos, Tune } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Router from 'next/router';
interface IHeaderProps {
  title: string;
}

export const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <div className={style.header}>
      <IconButton
        aria-label="back"
        onClick={() => {
          Router.back();
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
