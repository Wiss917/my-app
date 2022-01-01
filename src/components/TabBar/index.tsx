import React from 'react';
import style from './index.module.scss';

interface ITabBarProps {
  barItems: string[];
}

interface IBarItemProps {
  name: string;
  width: string;
}

export const TabBar: React.FC<ITabBarProps> = ({ barItems = [] }) => {
  const itemWidth = `${(100 / barItems.length).toFixed(2)}%`;

  return (
    <div className={style.bar}>
      {barItems.map((barName, index) => {
        return <BarItem name={barName} width={itemWidth} key={index}></BarItem>;
      })}
    </div>
  );
};

const BarItem: React.FC<IBarItemProps> = ({ name, width }) => {
  return (
    <div
      className="bar-item"
      style={{
        width,
      }}
    >
      {name}
    </div>
  );
};

TabBar.defaultProps = {
  barItems: [],
};
