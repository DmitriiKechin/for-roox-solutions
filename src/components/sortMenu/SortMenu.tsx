import React from 'react';
import { ISortMenu } from './types';
import styles from './sort.module.scss';
import { Button } from '../button/Button';
import { useAppSelector } from '../../hooks/redux.hooks';

export const SortMenu: React.FC<ISortMenu> = () => {
  const { isLoading } = useAppSelector((store) => store.userReducer);

  return (
    <div className={styles.wrapper}>
      <div>Сортировка</div>
      <div>
        <Button disabled={isLoading}>по городу</Button>
      </div>
      <div>
        <Button disabled={isLoading}>по компании</Button>
      </div>
    </div>
  );
};
