import React from 'react';
import { ISortMenu } from './types';
import styles from './sort.module.scss';
import { Button } from '../button/Button';
import { useAppSelector } from '../../hooks/redux.hooks';
import { useSort } from '../../hooks/useSort';

export const SortMenu: React.FC<ISortMenu> = () => {
  const { isLoading } = useAppSelector((store) => store.userReducer);
  const sort = useSort();
  return (
    <div className={styles.wrapper}>
      <div>Сортировка</div>
      <div>
        <Button
          disabled={isLoading}
          onClick={() => {
            sort('city');
          }}
        >
          по городу
        </Button>
      </div>
      <div>
        <Button
          disabled={isLoading}
          onClick={() => {
            sort('company');
          }}
        >
          по компании
        </Button>
      </div>
    </div>
  );
};
